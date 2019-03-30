import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { Fincheck } from "src/app/model/fincheck.model";
import { Borrower } from "src/app/model/borrower.model";

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q3Component implements OnInit {

  Q3: FormGroup;
  borrowamount_slider: string;
  borrowmonths_slider: string;
  URL = false;
  Debug = false;
  StartTime: Date;
  Answer;  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,    
    private fincheck: Fincheck,
    private headerService: HeaderService,
    private borrower: Borrower) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(12);
    this.borrowamount_slider = '5000';
    this.borrowmonths_slider = '24';

    this.Answer = this.borrowerService.getPreviousAnswer('q3');

    if (this.Answer != undefined) {
      this.borrowamount_slider = this.Answer.toString().split('|', 3)[0];
      this.borrowmonths_slider = this.Answer.toString().split('|', 3)[1];
    }

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q3 = new FormGroup({
      'borrowamount_slider': new FormControl(
        this.borrowamount_slider,
        [Validators.required]),
      'borrowmonths_slider': new FormControl(
        this.borrowmonths_slider,
        [Validators.required]),
    });

  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q3', 'Question', 'How much do you want to borrow? Over how many months', this.Q3.get('borrowamount_slider').value + '|' + this.Q3.get('borrowmonths_slider').value, this.StartTime.toString(), (new Date).toString()));
    this.borrower.RequiredLoanAmount = this.Q3.get('borrowamount_slider').value.toString();
    this.borrower.RepaymentPeriod = this.Q3.get('borrowmonths_slider').value.toString();

    this.router.navigateByUrl('/q4', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq2', { skipLocationChange: true });
  }
}
