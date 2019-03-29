import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/Question.model';
import { HeaderService } from 'src/app/service/header.service';
import { Borrower } from "src/app/model/borrower.model";

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q6Component implements OnInit {

  Q6: FormGroup;
  URL = false;
  StartTime: Date;
  Debug = false;
  credit_check: boolean;
  Answer: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerService: HeaderService,
    private borrower: Borrower) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(30);

    this.Answer = this.borrowerService.getPreviousAnswer('q6') != null ? JSON.parse(this.borrowerService.getPreviousAnswer('q6')) : false;

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q6 = new FormGroup({
      'credit_check': new FormControl(
        '',
        [Validators.required]),
    });

    this.credit_check = this.Answer;
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q6', 'Question', 'I give permission for EasyMoolah to do a credit check.', this.credit_check + '', this.StartTime.toString(), (new Date).toString()));
    this.borrower.PermissionToDoCreditCheck = this.credit_check + '';

    this.router.navigateByUrl('/q7', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq5', { skipLocationChange: true });
  }
}
