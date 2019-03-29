import { Component, OnInit } from '@angular/core';
import { FinanceResult, matches } from '../../model/financeresult.model';
import { Result } from "../../model/Result.model";
import { HeaderService } from 'src/app/service/header.service';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fincheck } from "src/app/model/fincheck.model";
import { Borrower } from "src/app/model/borrower.model";


@Component({
  selector: 'app-financialresult',
  templateUrl: './financialresult.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
})
export class FinancialresultComponent implements OnInit {

  financeResult: FinanceResult;
  matches: matches;
  result: Result;

  constructor(private headerService: HeaderService,
    private borrowerService: BorrowerService,
    private fincheck: Fincheck,
    private http: HttpClient,
    private borrower: Borrower) { }  

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

    const formData = new URLSearchParams();
    formData.set('first_name', this.borrower.FirstName.toString());
    formData.set('last_name', this.borrower.LastName.toString());
    formData.set('cell_phone_number', this.borrower.MobileNumber.toString());
    formData.set('email', this.borrower.Email.toString());
    formData.set('id_number', this.borrower.IdNumber.toString());
    formData.set('intent_id', '2');
    formData.set('gross_income', this.borrower.GrossMonthlyIncome.toString());
    formData.set('net_income', this.borrower.NettMonthlyIncome.toString());
    formData.set('citizen', 'true');
    formData.set('debt_review', 'no');
    formData.set('popi', 'true');
    formData.set('debt_review_opt', 'false');
    formData.set('repayment_period', this.borrower.RepaymentPeriod.toString());
    formData.set('expenses', this.borrower.TotalMonthlyExpenses.toString());
    formData.set('education', 'University');
    formData.set('street_address', this.borrower.StreetName.toString());
    formData.set('suburb', this.borrower.SuburbName.toString());
    formData.set('city', this.borrower.CityName.toString());
    formData.set('province', 'default');
    formData.set('post_code', this.borrower.PostCode.toString());
    formData.set('payday', '25');
    formData.set('employed', this.borrower.EmploymentStatus != 'Unemployed' ? 'true' : 'false');
    formData.set('company_name', 'deafult');
    formData.set('employment_period', '12');
    formData.set('work_phone_number', this.borrower.LandlineNumber.toString());
    formData.set('payment_frequency', '12');
    formData.set('bank_name', this.borrower.BankName.toString());

    console.log(formData);


    this.http.post('http://localhost:58007/api/fincheck/offer', formData.toString(), httpOptions)
      .subscribe(
        (res) => {
          this.result = JSON.parse(JSON.stringify(res));
          this.matches = JSON.parse(this.result.result).matches;
          //console.log(this.matches);
        },
        err => console.log(err)
      );
    //Fincheck/ Offer

  }
}
