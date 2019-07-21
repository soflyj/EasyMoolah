import { Component, OnInit } from '@angular/core';
import { Match } from '../../model/financeresult.model';
import { Result } from "../../model/Result.model";
import { HeaderService } from 'src/app/service/header.service';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fincheck } from "src/app/model/fincheck.model";
import { Fincheck } from "src/app/model/finchec";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-financialresult',
  templateUrl: './financialresult.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
})
export class FinancialresultComponent implements OnInit {

  // financeResult: FinanceResult;
  matches: Match;
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

const temp = new Borrower(){
  BankName = ''
}

    const formData = new URLSearchParams();
    formData.append('first_name', this.borrower.FirstName.toString());
    formData.append('last_name', this.borrower.LastName.toString());
    formData.append('cell_phone_number', this.borrower.MobileNumber.toString());
    formData.append('email', this.borrower.Email.toString());
    formData.append('id_number', this.borrower.IdNumber.toString());
    formData.append('intent_id', '2');
    formData.append('gross_income', this.borrower.GrossMonthlyIncome.toString());
    formData.append('net_income', this.borrower.NettMonthlyIncome.toString());
    formData.append('citizen', 'true');
    formData.append('debt_review', 'no');
    formData.append('popi', 'true');
    formData.append('debt_review_opt', 'false');
    formData.append('repayment_period', this.borrower.RepaymentPeriod.toString());
    formData.append('expenses', this.borrower.TotalMonthlyExpenses.toString());
    formData.append('education', 'University');
    formData.append('street_address', this.borrower.StreetName.toString());
    formData.append('suburb', this.borrower.SuburbName.toString());
    formData.append('city', this.borrower.CityName.toString());
    formData.append('province', 'default');
    formData.append('post_code', this.borrower.PostCode.toString());
    formData.append('payday', '25');
    formData.append('employed', this.borrower.EmploymentStatus != 'Unemployed' ? 'true' : 'false');
    formData.append('company_name', 'deafult');
    formData.append('employment_period', '12');
    formData.append('work_phone_number', this.borrower.LandlineNumber.toString());
    formData.append('payment_frequency', '12');
    formData.append('bank_name', this.borrower.BankName.toString());
    // const formData = new URLSearchParams();
    // formData.set('first_name', 'Jarrod');
    // formData.set('last_name', 'Ramsaroop');
    // formData.set('cell_phone_number', '0877777777');
    // formData.set('email', 'test@gmail.com');
    // formData.set('id_number', '8508155062080');
    // formData.set('intent_id', '2');
    // formData.set('gross_income', '50000');
    // formData.set('net_income', '50000');
    // formData.set('citizen', 'true');
    // formData.set('debt_review', 'no');
    // formData.set('popi', 'true');
    // formData.set('debt_review_opt', 'false');
    // formData.set('repayment_period', '6');
    // formData.set('expenses', '5000');
    // formData.set('education', 'University');
    // formData.set('street_address', 'street address');
    // formData.set('suburb', 'suburb');
    // formData.set('city', 'city');
    // formData.set('province', 'default');
    // formData.set('post_code', '1234');
    // formData.set('payday', '25');
    // formData.set('employed','true');
    // formData.set('company_name', 'company name');
    // formData.set('employment_period', '12');
    // formData.set('work_phone_number', '0879999999');
    // formData.set('payment_frequency', '12');
    // formData.set('bank_name', 'FNB');

    console.log(formData.toString());


    this.http.post(this.apiUrl + 'fincheck/offer', formData.toString(), httpOptions)
      .subscribe(
        (res) => {
          this.result = JSON.parse(JSON.stringify(res));
          this.matches = JSON.parse(this.result.result);
          console.log(this.matches);
          this.headerService.mode.next('determinateng serve');
          this.headerService.progress.next(0);
        },
        err => console.log(err)
      );
    //Fincheck/ Offer

  }

  // callme(financeResult: FinanceResult) {
  //   //Fincheck/ Offer
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       // tslint:disable-next-line:max-line-length
  //       'Authorization': 'Bearer ' + this.localToken,
  //       'X-Requested-With': 'XMLHttpRequest'
  //     })
  //   };
  //   console.log(financeResult);
  //   console.log(this.borrower.ApplicationKey);
  //   console.log(this.borrower.IdNumber);
  //   const formData = new URLSearchParams();
  //   formData.set('applicationKey', '1');
  //   formData.set('probability', financeResult.probability === null ? '': financeResult.probability.toString());
  //   formData.set('providerLogo', financeResult.company_logo_url === null ? '': financeResult.company_logo_url.toString());
  //   formData.set('providerName', financeResult.company_name === null ? '': financeResult.company_name.toString());
  //   formData.set('providerWebsite', financeResult.company_website_url === null ? '': financeResult.company_website_url.toString());
  //   formData.set('hasid', this.borrower.IdNumber.toString());

  //   console.log(formData);

  //   this.http.post(this.apiUrl + 'fincheck/accept', formData.toString(), httpOptions)
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       err => console.log(err)
  //     );
  //   //Fincheck/ Offer
  // }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
