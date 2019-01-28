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
    new FinanceResult(1, 'Old Mutual', '../../../assets/images/fsp-logos/oldmutual.png', '', 'https://www.oldmutual.co.za/' , 1, 30),
    new FinanceResult(2, 'Standard Bank', '../../../assets/images/fsp-logos/standardbank.png', '', 'https://www.standardbank.co.za/', 2, 10),
    new FinanceResult(3, 'Capfin', '../../../assets/images/fsp-logos/capfin.png', '', 'https://www.capfin.co.za/', 3, 80),
    new FinanceResult(4, 'DirectAxis', '../../../assets/images/fsp-logos/directaxis.png', '', 'https://www.directaxis.co.za/', 4, 25)
  ];

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(0);
  }

}
