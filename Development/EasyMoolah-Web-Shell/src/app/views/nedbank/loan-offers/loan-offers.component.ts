import { Component, OnInit } from '@angular/core';
import { RootObject } from '../../../models/nedbank/PersonLoanOffers.model';

@Component({
  selector: 'app-loan-offers',
  templateUrl: './loan-offers.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css', './loan-offers.component.css']
})
export class LoanOffersComponent implements OnInit {

  personLoanOffers: RootObject;
  terms: any;
  sample: string;


  constructor() { }

  ngOnInit() {
    this.sample = '{ "PersonalLoanOffers": { "PLOfferId": 605350, "Terms": [ { "MaxAmount": { "Amount": 31500, "Currency": 1 }, "MinAmount": { "Amount": 3500, "Currency": 1 }, "Term": 24, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } }, { "MaxAmount": { "Amount": 47200, "Currency": 1 }, "MinAmount": { "Amount": 12000, "Currency": 1 }, "Term": 60, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } }, { "MaxAmount": { "Amount": 50800, "Currency": 1 }, "MinAmount": { "Amount": 25000, "Currency": 1 }, "Term": 72, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } }, { "MaxAmount": { "Amount": 46500, "Currency": 1 }, "MinAmount": { "Amount": 7500, "Currency": 1 }, "Term": 48, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } }, { "MaxAmount": { "Amount": 40500, "Currency": 1 }, "MinAmount": { "Amount": 5000, "Currency": 1 }, "Term": 36, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } }, { "MaxAmount": { "Amount": 10000, "Currency": 1 }, "MinAmount": { "Amount": 10, "Currency": 1 }, "Term": 18, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } }, { "MaxAmount": { "Amount": 22500, "Currency": 1 }, "MinAmount": { "Amount": 2000, "Currency": 1 }, "Term": 12, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } }, { "MaxAmount": { "Amount": 13500, "Currency": 1 }, "MinAmount": { "Amount": 1000, "Currency": 1 }, "Term": 6, "InterestRate": { "Rate": 27.75, "Label": "Fixed interest rate", "Description": "The ratio of the total cost of credit(total amount, including costs and interest, that you\'ll pay back) to the loan amount. This shows you the cost of each rand you borrow.", "Help": null } } ] }, "Links": { "self": "http://localhost:3000/api/open-banking/v1/personal-loan-offers" }, "Meta": { "total-pages": 1 } }';

    this.personLoanOffers = <RootObject>JSON.parse(this.sample); // Cast
    this.terms = this.personLoanOffers.PersonalLoanOffers.Terms; // Drill down only to the Terms node
    this.terms.sort((a, b) => a.Term - b.Term); // Order by Term in ASC
    console.log(this.personLoanOffers.PersonalLoanOffers.Terms);
  }

  want(){

  }

}
