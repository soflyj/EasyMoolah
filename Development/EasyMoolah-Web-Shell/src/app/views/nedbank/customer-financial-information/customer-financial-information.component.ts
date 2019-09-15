import { Component, OnInit } from '@angular/core';
import { RootObject } from '../../../models/nedbank/CustomerFinancialInformation.model';

@Component({
  selector: 'app-customer-financial-information',
  templateUrl: './customer-financial-information.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css', './customer-financial-information.component.css']
})
export class CustomerFinancialInformationComponent implements OnInit {

  customerFinancalInformation: RootObject;
  declarations: any;
  sample: string;

  constructor() { }

  ngOnInit() {
    this.sample = '{"CustomerFinancials":{"Financials":{"Declarations":[{"Label":"Total monthly debt obligations","Description":"This can include car finance, home loans, cellphone contracts, credit cards and store card accounts.","Amount":{"Amount":14700,"Currency":1}},{"Label":"Total monthly debt obligations","Description":"This can include car finance, home loans, cellphone contracts, credit cards and store card accounts.","Amount":{"Amount":14700,"Currency":1}},{"Label":"Total monthly debt obligations","Description":"This can include car finance, home loans, cellphone contracts, credit cards and store card accounts.","Amount":{"Amount":14700,"Currency":1}}],"Accepted":false}},"Links":{"self":"http:\/\/localhost:3000\/api\/open-banking\/v1\/personal-loan-offers\/605350\/financials"},"Meta":{"total-pages":1}}';

    this.customerFinancalInformation = <RootObject>JSON.parse(this.sample); // Cast
    this.declarations = this.customerFinancalInformation.CustomerFinancials.Financials.Declarations; // Drill down only to the Terms node
    // this.terms.sort((a, b) => a.Term - b.Term); // Order by Term in ASC
    console.log(this.customerFinancalInformation.CustomerFinancials.Financials.Declarations);
  }

  Move() {

  }

}
