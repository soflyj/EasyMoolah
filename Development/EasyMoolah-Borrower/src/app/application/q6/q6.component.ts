import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q6Component implements OnInit {

  URL = false;
  StartTime: Date;
  Debug = false;
  credit_check: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerService: HeaderService) { }
  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(30);
    this.credit_check = false;

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('Question', 'I give permission for EasyMoolah to do a credit check.', this.credit_check.valueOf.toString(), this.StartTime.toString(), (new Date).toString()));            

    this.router.navigateByUrl('/q7', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq5', { skipLocationChange: true });
  }
}
