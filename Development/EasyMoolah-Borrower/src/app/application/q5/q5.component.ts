import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/Question.model';
import { Borrower } from "src/app/model/borrower.model";

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q5Component implements OnInit {

  Q5: FormGroup;
  URL = false;
  Debug = false;
  StartTime: Date;
  Answer;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerService: HeaderService,
    private borrower: Borrower) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(24);

    this.Answer = this.borrowerService.getPreviousAnswer('q5');

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q5 = new FormGroup({
      'insolvent': new FormControl(
        this.Answer,
        [Validators.required]),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q5', 'Question', 'Have you applied for or been declared insolvent?', this.Q5.get('insolvent').value, this.StartTime.toString(), (new Date).toString()));
    this.borrower.IsDeclaredInsolvent = this.Q5.get('insolvent').value;

    this.router.navigateByUrl('/q6', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq4', { skipLocationChange: true });
  }
}
