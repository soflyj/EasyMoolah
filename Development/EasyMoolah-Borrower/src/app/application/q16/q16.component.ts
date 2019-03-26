import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';
import { Fincheck } from "src/app/model/fincheck.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-q16',
    templateUrl: './q16.component.html',
    styleUrls: ['../../../assets/css/em_site_theme.css'],
    animations: [routerTransition]
})
export class Q16Component implements OnInit {

    Q16: FormGroup;
    URL = false;
    Debug = false;
    StartTime: Date;

    idnumber: string;
    maxLength = 13;
    pattern: any;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private fincheck: Fincheck,
        private headerService: HeaderService,
        private http: HttpClient) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(100);

        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

        // Reactive validation
        this.Q16 = new FormGroup({
            'idnumber': new FormControl(
                '',
                [Validators.required, this.CheckSAIdNumber.bind(this)]
            )
        });
    }

    CheckSAIdNumber(control: FormControl): { [s: string]: boolean } {
        this.idnumber = control.value;
        // tslint:disable-next-line:max-line-length
        this.pattern = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
        if (!(this.pattern.test(this.idnumber) && this.idnumber.length == 13)) {
            return { 'IdNumberValid': true };
        } else {
            return null;
        }
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('q16', 'Question', 'ID Number', this.Q16.value, this.StartTime.toString(), (new Date).toString()));
        this.fincheck.id_number = this.Q16.value.idnumber;
        console.log(this.fincheck);


        //Fincheck/ Offer
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVhc3ltb29sYWgiLCJuYmYiOjE1NTM2MTExNjksImV4cCI6MTU1NDIxNTk2OSwiaWF0IjoxNTUzNjExMTY5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5MSJ9.Ow461m1MkOn9SCd-7qWfFCkfnJfp4GGLGtIh4HTCmvQ',
                'X-Requested-With': 'XMLHttpRequest'
            })
        };

        this.fincheck.first_name = 'Jarrod';
        this.fincheck.last_name = 'Ramsaroop';
        this.fincheck.cell_phone_number = '0823216547';
        this.fincheck.email = 'jr@gmail.com';
        this.fincheck.id_number = 8508155062080;
        this.fincheck.gross_income = 50000;
        this.fincheck.net_income = 40000;
        this.fincheck.repayment_period = 12
        this.fincheck.expenses = 5000;
        this.fincheck.street_address = '123';
        this.fincheck.suburb = '123';
        this.fincheck.city = '123';
        this.fincheck.province = '123';
        this.fincheck.post_code = 0;
        this.fincheck.payday = 15;
        this.fincheck.employed = 'true';
        this.fincheck.bank_name = 'Nedbank';

        const formData = new URLSearchParams();
        formData.set('first_name', this.fincheck.first_name);
        formData.set('last_name', this.fincheck.last_name);
        formData.set('cell_phone_number', this.fincheck.cell_phone_number);
        formData.set('email', this.fincheck.email);
        formData.set('id_number', this.fincheck.id_number.toString());
        formData.set('intent_id', '2');
        formData.set('gross_income', this.fincheck.gross_income.toString());
        formData.set('net_income', this.fincheck.net_income.toString());
        formData.set('citizen', 'true');
        formData.set('debt_review', 'no');
        formData.set('popi', 'true');
        formData.set('debt_review_opt', 'false');
        formData.set('repayment_period', this.fincheck.repayment_period.toString());
        formData.set('expenses', this.fincheck.expenses.toString());
        formData.set('education', 'University');
        formData.set('street_address', this.fincheck.street_address);
        formData.set('suburb', this.fincheck.suburb);
        formData.set('city', this.fincheck.city);
        formData.set('province', this.fincheck.province);
        formData.set('post_code', this.fincheck.post_code.toString());
        formData.set('payday', this.fincheck.payday.toString());
        formData.set('employed', this.fincheck.employed);
        formData.set('company_name', 'KPMG');
        formData.set('employment_period', '5 years');
        formData.set('work_phone_number', '0111234567');
        formData.set('payment_frequency', '12');
        formData.set('bank_name', this.fincheck.bank_name);
        formData.set('referee_id', '6q84vq'); //default

        console.log(formData);



        this.http.post('https://application.jarrod.a2hosted.com/api/fincheck/lead', formData.toString(), httpOptions)
            .subscribe(
                (res) => {

                },
                err => console.log(err)
            );



        this.router.navigateByUrl('/processing', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq15', { skipLocationChange: true });
    }
}
