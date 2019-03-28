import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';
import { Borrower } from 'src/app/model/borrower.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
})
export class ProcessingComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService,
    private borrower: Borrower,
    private http: HttpClient) {
  }
  ngOnInit() {
    this.headerService.mode.next('query');

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
    formData.set('ApplicationKey', '1');
    formData.set('IdNumber', this.borrower.IdNumber);
    formData.set('FirstName', this.borrower.FirstName);
    formData.set('LastName', this.borrower.LastName);
    formData.set('Email', this.borrower.Email);
    formData.set('MobileNumber', this.borrower.MobileNumber);
    formData.set('LandlineNumber', this.borrower.LandlineNumber);
    formData.set('RequiredLoanAmount', this.borrower.RequiredLoanAmount);
    formData.set('RepaymentPeriod', this.borrower.RepaymentPeriod);
    formData.set('IsUnderDebtReview', this.borrower.IsUnderDebtReview);
    formData.set('IsDeclaredInsolvent', this.borrower.IsDeclaredInsolvent);
    formData.set('PermissionToDoCreditCheck', this.borrower.PermissionToDoCreditCheck);
    formData.set('IsPopicompliant', this.borrower.IsPopicompliant);
    formData.set('EmploymentStatus', this.borrower.EmploymentStatus != 'Unemployed' ? 'true' : 'false');
    formData.set('GrossMonthlyIncome', this.borrower.GrossMonthlyIncome);
    formData.set('NettMonthlyIncome', this.borrower.NettMonthlyIncome);
    formData.set('TotalMonthlyExpense', this.borrower.TotalMonthlyExpenses);
    formData.set('BankName', this.borrower.BankName);
    formData.set('NumberOfDependants', this.borrower.NumberOfDependants);
    formData.set('ResidenceType', this.borrower.ResidenceType);
    formData.set('FullAddress', "this.borrower.FullAddress");
    formData.set('StreetName', this.borrower.StreetName);
    formData.set('SuburbName', this.borrower.SuburbName);
    formData.set('CityName', this.borrower.CityName);
    formData.set('PostCode', this.borrower.PostCode);

    console.log(formData);

    this.http.post('http://localhost:58007/api/borrower/insert', formData.toString(), httpOptions)
      .subscribe(
        (res) => {
          if (res != -1) {
            this.router.navigateByUrl('/financialresult', { skipLocationChange: true });
          }
        },
        err => console.log(err)
      );
    //Fincheck/ Offer


    this.go_next();
    // this.headerservice.setMode('indeterminate');
  }

  go_next() {
    setTimeout(() => {
      
    }
      , 3000);
  }

}
