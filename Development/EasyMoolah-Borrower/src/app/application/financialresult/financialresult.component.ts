import { Component, OnInit } from '@angular/core';
import { FinanceResult } from '../../model/financeresult.model';
@Component({
  selector: 'app-financialresult',
  templateUrl: './financialresult.component.html',
  styleUrls: ['./financialresult.component.css']
})
export class FinancialresultComponent implements OnInit {

    financeResults: FinanceResult[] = [
    new FinanceResult(15000, 'Old Mutual', '../../../assets/images/fsp-logos/oldmutual.png'),
    new FinanceResult(2000, 'Standard Bank', '../../../assets/images/fsp-logos/standardbank.png'),
    new FinanceResult(5000, 'Capfin', '../../../assets/images/fsp-logos/capfin.png'),
    new FinanceResult(100000, 'DirectAxis', '../../../assets/images/fsp-logos/directaxis.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
