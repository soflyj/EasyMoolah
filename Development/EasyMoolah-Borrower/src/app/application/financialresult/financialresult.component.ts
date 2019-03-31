import { Component, OnInit } from '@angular/core';
import { FinanceResult, matches } from '../../model/financeresult.model';
import { Result } from "../../model/Result.model";
import { HeaderService } from 'src/app/service/header.service';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fincheck } from "src/app/model/fincheck.model";
import { Borrower } from "src/app/model/borrower.model";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-financialresult',
  templateUrl: './financialresult.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
})
export class FinancialresultComponent implements OnInit {

  financeResult: FinanceResult;
  matches: matches;
  result: Result;
  apiUrl: string = environment.apiUrl;
  localToken: string = environment.localToken;

  constructor(private headerService: HeaderService,
    private borrowerService: BorrowerService,
    private fincheck: Fincheck,
    private http: HttpClient,
    private borrower: Borrower) { }

  ngOnInit() {
    this.headerService.mode.next('query');
    this.headerService.progress.next(0);

    //Fincheck/ Offer
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer ' + this.localToken,
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


    this.http.post(this.apiUrl + 'fincheck/offer', formData.toString(), httpOptions)
      .subscribe(
        (res) => {
          this.result = JSON.parse(JSON.stringify(res));
          this.matches = JSON.parse(this.result.result).matches;
          console.log(this.matches);
          this.headerService.mode.next('determinateng serve');
          this.headerService.progress.next(0);
        },
        err => console.log(err)
      );
    //Fincheck/ Offer

  }

  callme(financeResult: FinanceResult) {
    //Fincheck/ Offer
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer ' + this.localToken,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    console.log(financeResult);
    console.log(this.borrower.ApplicationKey);
    console.log(this.borrower.IdNumber);
    const formData = new URLSearchParams();
    formData.set('applicationKey', '1');
    formData.set('probability', financeResult.probability === null ? '': financeResult.probability.toString());
    formData.set('providerLogo', financeResult.company_logo_url === null ? '': financeResult.company_logo_url.toString());
    formData.set('providerName', financeResult.company_name === null ? '': financeResult.company_name.toString());
    formData.set('providerWebsite', financeResult.company_website_url === null ? '': financeResult.company_website_url.toString());
    formData.set('hasid', this.borrower.IdNumber.toString());

    console.log(formData);

    this.http.post(this.apiUrl + 'fincheck/accept', formData.toString(), httpOptions)
      .subscribe(
        (res) => {
          console.log(res);
        },
        err => console.log(err)
      );
    //Fincheck/ Offer
  }

}
