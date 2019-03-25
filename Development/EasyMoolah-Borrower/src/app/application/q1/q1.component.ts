import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType, RequestOptions } from '@angular/http';
import { isNull } from 'util';


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
    private http: HttpClient) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(0);

    this.Answer = this.borrowerService.getPreviousAnswer('q1');
    
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDY5Mzk4ODIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjM5MzkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo2MzkzOS8ifQ.NAJBEJ0xtz_cABUuGm9xCLLZH8R6V_E27Qz26CrjRyQ'
    //   })
    // };
    // const body: any = '';

    // const req = this.http.get('http://localhost:58007/api/books', httpOptions)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log('Error occured');
    //     }
    //   );

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
