import { Component, OnInit } from '@angular/core';
import { FinanceResult, matches } from '../../model/financeresult.model';
import { Result } from "../../model/Result.model";
import { HeaderService } from 'src/app/service/header.service';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonalDetails } from 'src/app/model/personalDetails.model';
import { Fincheck } from "src/app/model/fincheck.model";

@Component({
  selector: 'app-financialresult',
  templateUrl: './financialresult.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
})
export class FinancialresultComponent implements OnInit {

  financeResult: FinanceResult;
  matches: matches;
  result: Result;
  personalDetails: PersonalDetails;

  constructor(private headerService: HeaderService,
    private borrowerService: BorrowerService,
    private fincheck: Fincheck,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(0);

    //Fincheck/ Offer
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVhc3ltb29sYWgiLCJuYmYiOjE1NTM2MTExNjksImV4cCI6MTU1NDIxNTk2OSwiaWF0IjoxNTUzNjExMTY5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5MSJ9.Ow461m1MkOn9SCd-7qWfFCkfnJfp4GGLGtIh4HTCmvQ',
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    // this.fincheck.first_name = 'Jarrod';
    // this.fincheck.last_name = 'Ramsaroop';
    // this.fincheck.cell_phone_number = '0823216547';
    // this.fincheck.email = 'jr@gmail.com';
    this.fincheck.id_number = '8508155062080';
    // this.fincheck.gross_income = 50000;
    // this.fincheck.net_income = 40000;
    // this.fincheck.repayment_period = 12
    // this.fincheck.expenses = 5000;
    // this.fincheck.street_address = '123';
    // this.fincheck.suburb = '123';
    // this.fincheck.city = '123';
    // this.fincheck.province = '123';
    // this.fincheck.post_code = 0;
    // this.fincheck.payday = 15;
    // this.fincheck.employed = 'true';
    // this.fincheck.bank_name = 'Nedbank';

    const formData = new URLSearchParams();
    formData.set('first_name', this.fincheck.first_name);
    formData.set('last_name', this.fincheck.last_name);
    formData.set('cell_phone_number', this.fincheck.cell_phone_number);
    formData.set('email', this.fincheck.email);
    formData.set('id_number', this.fincheck.id_number);
    formData.set('intent_id', '2');
    formData.set('gross_income', this.fincheck.gross_income);
    formData.set('net_income', this.fincheck.net_income);
    formData.set('citizen', 'true');
    formData.set('debt_review', 'no');
    formData.set('popi', 'true');
    formData.set('debt_review_opt', 'false');
    formData.set('repayment_period', this.fincheck.repayment_period);
    formData.set('expenses', this.fincheck.expenses);
    formData.set('education', 'University');
    formData.set('street_address', this.fincheck.street_address);
    formData.set('suburb', this.fincheck.suburb);
    formData.set('city', this.fincheck.city);
    formData.set('province', this.fincheck.province);
    formData.set('post_code', this.fincheck.post_code);
    formData.set('payday', this.fincheck.payday);
    formData.set('employed', this.fincheck.employed);
    formData.set('company_name', 'KPMG');
    formData.set('employment_period', '5 years');
    formData.set('work_phone_number', '0111234567');
    formData.set('payment_frequency', '12');
    formData.set('bank_name', this.fincheck.bank_name);
    formData.set('referee_id', '6q84vq'); //default

    console.log(formData);



    this.http.post('https://application.jarrod.a2hosted.com/api/fincheck/offer', formData.toString(), httpOptions)
      .subscribe(
        (res) => {
          this.result = JSON.parse(JSON.stringify(res));
          this.matches = JSON.parse(this.result.result).matches;
          //console.log(this.matches);
        },
        err => console.log(err)
      );
  }
}
