import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/Question.model';
import { Borrower } from 'src/app/model/borrower.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q1Component implements OnInit {
  [x: string]: any;

  Q1: FormGroup;
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
    this.headerService.progress.next(0);

    this.Answer = this.borrowerService.getPreviousAnswer('q1');

    this.StartTime = new Date();

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q1 = new FormGroup({
      'service': new FormControl(
        this.Answer,
        [Validators.required]),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length    
    this.borrowerService.addToQuestionLog(new Question('q1', 'Questions', 'Which service would you like a loan for?', this.Q1.get('service').value, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q2', { skipLocationChange: true });
  }
}
