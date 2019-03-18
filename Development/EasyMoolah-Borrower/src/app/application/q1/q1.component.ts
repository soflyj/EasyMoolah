import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q1Component implements OnInit {

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

    let body = new URLSearchParams();
    body.set('first_name', 'John');
    body.set('last_name', 'Doe');
    body.set('cell_phone_number', '0826426395');
    body.set('email', 'john@doe.com');
    body.set('id_number', '08');
    body.set('intent_id', '1');

    
    // let options = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVhc3ltb29sYWgiLCJuYmYiOjE1NTI4MDg3NzIsImV4cCI6MTU1MzQxMzU3MiwiaWF0IjoxNTUyODA4NzcyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5MSJ9.qKq9oKwiTRSL22UcaKeWD9XUIgoxYrEBkn8RDUDEf6A'
    //   })
    // };

    let headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVhc3ltb29sYWgiLCJuYmYiOjE1NTI4MDg3NzIsImV4cCI6MTU1MzQxMzU3MiwiaWF0IjoxNTUyODA4NzcyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5MSJ9.qKq9oKwiTRSL22UcaKeWD9XUIgoxYrEBkn8RDUDEf6A')
    // .set('Access-Control-Allow-Origin', '*')
    
    this.http
         .post('https://application.jarrod.a2hosted.com/api/fincheck/offer', 
         // body.toString(), 
         {
         'first_name': 'John',
          'last_name': 'Doe',
          'cell_phone_number': '0826426395',
          'email': 'john@doe.com',
          'id_number': '08',
          'intent_id': '1'
         },
         {headers})
        //.get('https://jsonplaceholder.typicode.com/todos/1',    )
        .subscribe(response => {
            let json = response;

            console.log(json);
        });

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
