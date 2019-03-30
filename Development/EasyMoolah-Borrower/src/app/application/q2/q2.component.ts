import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { isNull } from 'util';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q2Component implements OnInit {

  Q2: FormGroup;
  URL = false;
  Debug = false;
  StartTime: Date;
  Answer;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerService: HeaderService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(6);

    this.Answer = this.borrowerService.getPreviousAnswer('q2');

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q2 = new FormGroup({
      'sub-service': new FormControl(
        this.Answer,
        [Validators.required]),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q2', 'Question', 'What type of automobile repair?', this.Q2.get('sub-service').value, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q3', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq1', { skipLocationChange: true });
  }
}
