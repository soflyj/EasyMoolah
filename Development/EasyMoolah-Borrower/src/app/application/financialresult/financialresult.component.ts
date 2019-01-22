import { Component, OnInit } from '@angular/core';
import { FinanceResult } from '../../model/financeresult.model';
import { HeaderService } from 'src/app/service/header.service';
@Component({
  selector: 'app-financialresult',
  templateUrl: './financialresult.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
})
export class FinancialresultComponent implements OnInit {

    financeResults: FinanceResult[] = [
    new FinanceResult(15000, 'Old Mutual', '../../../assets/images/fsp-logos/oldmutual.png', 'old mutual'),
    new FinanceResult(2000, 'Standard Bank', '../../../assets/images/fsp-logos/standardbank.png', 'standard bank'),
    new FinanceResult(5000, 'Capfin', '../../../assets/images/fsp-logos/capfin.png', 'capfin'),
    new FinanceResult(100000, 'DirectAxis', '../../../assets/images/fsp-logos/directaxis.png', 'directaxis')
  ];

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(0);
  }

}
