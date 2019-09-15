import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPointModel } from 'src/app/models/data-point.model';
import { DataPointService } from 'src/app/services/data-point.service';
import { CommonService } from 'src/app/services/common.service';
import { ApplicantModel } from 'src/app/models/applicant.model';

@Component({
    selector: 'app-step15',
    templateUrl: './step15.component.html',
    styleUrls: ['../../../../assets/css/em_site_theme.css', './step15.component.css']
})
export class Step15Component implements OnInit {

    stepForm: FormGroup;
    dataPoint: DataPointModel = new DataPointModel();
    question: string;
    answer: string[] = null;
    guid: any;
    startTime

    mobileNumber: string = '';
    mobileNumberLength: number;
    landlineNumber: string = '';
    landlineNumberLength: number;
    mask: any;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private headerService: HeaderService,
        private dataPointService: DataPointService,
        private commonService: CommonService) {
        this.question = 'Personal Information';
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: any) => {
            this.guid = params.guid;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(84);

        if (this.dataPointService.getPreviousDataPointState(15) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(15);
        }

        if (this.guid != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute })
        }

        // Reactive validation
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.stepForm = new FormGroup({
            'firstname': new FormControl(
                (this.answer == null ? '' : this.answer[0]),
                Validators.required),
            'lastname': new FormControl(
                (this.answer == null ? '' : this.answer[1]),
                Validators.required),
            'email': new FormControl(
                (this.answer == null ? '' : this.answer[2]),
                [Validators.required, Validators.email]),
            'mobilenumber': new FormControl(
                (this.answer == null ? '' : this.answer[3]),
                [Validators.required, this.CheckMobileNumber.bind(this)]),
            'landlinenumber': new FormControl((this.answer == null ? '' : this.answer[4]),
                [this.CheckLandlineNumber.bind(this)])
        });
    }

    CheckMobileNumber(control: FormControl): { [s: string]: boolean } {
        if (control.value == 'undefined') {
            this.mobileNumber = control.value;
            this.mobileNumberLength = this.mobileNumber.replace(/[-_() ]/g, '').length;
            if (this.mobileNumberLength !== 10 || this.mobileNumber.substring(1, 2) !== '0') {
                return { 'MobileValid': true };
            } else {
                return null;
            }
        }
    }

    CheckLandlineNumber(control: FormControl): { [s: string]: boolean } {
        if (control.value == 'undefined') {
            this.landlineNumber = control.value;
            this.landlineNumberLength = this.landlineNumber.replace(/[-_() ]/g, '').length;
            if ((this.landlineNumberLength !== 10 || this.landlineNumber.substring(1, 2) !== '0') && this.landlineNumberLength !== 0) {
                return { 'LandlineValid': true };
            } else {
                return null;
            }
        }
    }

    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];

        this.dataPoint.Id = 15;
        this.dataPoint.Question.push('FirstName', 'LastName', 'Email', 'MobileNumber', 'LandlineNumber');
        this.dataPoint.Answer.push(this.stepForm.value.firstname, this.stepForm.value.lastname, this.stepForm.value.email, this.stepForm.value.mobileNumber, this.stepForm.value.landlineNumber);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);

        this.saveApplicant();
    }

    Back() {

    }

    saveApplicant() {
        const applicant = new ApplicantModel();
        applicant.firstName = this.stepForm.value.firstname;
        applicant.lastName = this.stepForm.value.lastname;
        applicant.email = this.stepForm.value.email;
        applicant.mobileNumber = this.stepForm.value.email;
        applicant.landlineNumber = this.stepForm.value.landlineNumber;

        this.commonService.SaveApplicant(applicant).subscribe(
            (res) => console.log(res),
            err => console.log(err)
        );
    }
}
