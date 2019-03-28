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
  selector: 'app-q10',
  templateUrl: './q10.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q10Component implements OnInit {

  Q10: FormGroup;
  monthlyexpense_slider: string;
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
    this.headerService.progress.next(54);
    this.monthlyexpense_slider = '50000'; // Default range

    this.Answer = this.borrowerService.getPreviousAnswer('q10');

    if (this.Answer != undefined) {
      this.monthlyexpense_slider = this.Answer.toString();
    }

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q10 = new FormGroup({
      'monthlyexpense_slider': new FormControl(
        this.monthlyexpense_slider,
        [Validators.required])
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q10', 'Question', 'What\'s your total monthly expense?', this.Q10.get('monthlyexpense_slider').value, this.StartTime.toString(), (new Date).toString()));
    this.borrower.TotalMonthlyExpenses = this.Q10.get('monthlyexpense_slider').value;

    this.router.navigateByUrl('/q11', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq9', { skipLocationChange: true });
  }
}
