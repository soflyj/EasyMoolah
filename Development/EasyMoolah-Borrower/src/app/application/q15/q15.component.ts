import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';

@Component({
    selector: 'app-q15',
    templateUrl: './q15.component.html',
    styleUrls: ['../../../assets/css/em_site_theme.css', './q15.component.css'],
    animations: [routerTransition]
})
export class Q15Component implements OnInit {

    Q15: FormGroup;
    URL = false;
    StartTime: Date;
    Debug = false;
    Answer;

    MobileNumber: string;
    MobileNumberLength: number;
    LandlineNumber: string;
    LandlineNumberLength: number;
    mask: any;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private headerService: HeaderService) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(84);

        this.Answer = this.borrowerService.getPreviousAnswer('q15');

        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

        // Reactive validation
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.Q15 = new FormGroup({
            'firstname': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].firstname),
                Validators.required),
            'lastname': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].lastname),
                Validators.required),
            'email': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].email),
                [Validators.required, Validators.email]),
            'mobilenumber': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].mobilenumber),
                [Validators.required, this.CheckMobileNumber.bind(this)]),
            'landlinenumber': new FormControl((this.Answer == null ? '' : this.Answer[0].landlinenumber),
                [this.CheckLandlineNumber.bind(this)])
        });
    }

    CheckMobileNumber(control: FormControl): { [s: string]: boolean } {
        this.MobileNumber = control.value;
        this.MobileNumberLength = this.MobileNumber.replace(/[-_() ]/g, '').length;
        if (this.MobileNumberLength !== 10 || this.MobileNumber.substring(1, 2) !== '0') {
            return { 'MobileValid': true };
        } else {
            return null;
        }
    }

    CheckLandlineNumber(control: FormControl): { [s: string]: boolean } {
        this.LandlineNumber = control.value;
        this.LandlineNumberLength = this.LandlineNumber.replace(/[-_() ]/g, '').length;
        if ((this.LandlineNumberLength !== 10 || this.LandlineNumber.substring(1, 2) !== '0') && this.LandlineNumberLength !== 0) {
            return { 'LandlineValid': true };
        } else {
            return null;
        }
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('q15', 'Question', 'Personal Information', this.Q15.value, this.StartTime.toString(), (new Date).toString()));
        this.borrowerService.addToPersonalDetails(this.Q15.value);
        //console.log(this.Q15.value);

        this.router.navigateByUrl('/q16', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq14', { skipLocationChange: true });
    }
}
