import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/Question.model';
import { Fincheck } from "src/app/model/fincheck.model";
import { Borrower } from "src/app/model/borrower.model";

@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q8Component implements OnInit {

  Q8: FormGroup;
  grossincome_slider: string;
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
    this.headerService.progress.next(42);
    this.grossincome_slider = '50000'; // Default range

    this.Answer = this.borrowerService.getPreviousAnswer('q8')

    if (this.Answer != undefined) {
      this.grossincome_slider = this.Answer.toString();
    }

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q8 = new FormGroup({
      'grossincome_slider': new FormControl(
        this.grossincome_slider,
        [Validators.required])
    });

  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q8', 'Question', 'What\'s your gross monthly income?', this.Q8.get('grossincome_slider').value, this.StartTime.toString(), (new Date).toString()));
    this.borrower.GrossMonthlyIncome = this.Q8.get('grossincome_slider').value;

    this.router.navigateByUrl('/q9', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq7', { skipLocationChange: true });
  }
}
