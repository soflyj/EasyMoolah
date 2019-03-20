import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType, RequestOptions } from '@angular/http';


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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerService: HeaderService,
    private http: HttpClient) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(0);

    ////////////////////////////////

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVhc3ltb29sYWgiLCJuYmYiOjE1NTMwNzI4NTgsImV4cCI6MTU1MzY3NzY1OCwiaWF0IjoxNTUzMDcyODU4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5MSJ9.1Mj-cYW4gnkB4pIlBMq5WFZhStTLDN7uaFq6CxrVmSk'
      })
    };

    // const formData = new FormData();
    // formData.append('sessionId', '1');
    // formData.append('id', '1');

    const formData = new URLSearchParams();
    formData.set('sessionId', '1');
    formData.set('id', '1');
    console.log(formData);



    this.http.post('https://application.jarrod.a2hosted.com/api/Fincheck/intentbyid', formData.toString(), httpOptions)
      .subscribe(
        (res) => {
          console.log(res);
        },
        err => console.log(err)
      );

    ////////////////////////////////

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
        '',
        [Validators.required]
      ),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.question = [new Question('Questions', 'Which service would you like a loan for?', this.Q1.get('service').value, this.StartTime.toString(), (new Date).toString())];

    this.router.navigateByUrl('/q2', { skipLocationChange: true });
  }
}
