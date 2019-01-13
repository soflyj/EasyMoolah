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
    styleUrls: ['./q15.component.css'],
    animations: [routerTransition]
})
export class Q15Component implements OnInit {

    Q15: FormGroup;
    URL = false;
    StartTime: Date;
    Debug = false;

    mobiletel: string;
    mobiletelLength: number;
    landtel: string;
    landtelLength: number;
    mask: any;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private headerservice: HeaderService) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.headerservice.progress.next(78);

        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

        this.Q15 = new FormGroup({
            // 'first_name': new FormControl('', Validators.required),
            // 'last_name': new FormControl('', Validators.required),
            // 'email': new FormControl('', [Validators.required, Validators.email]),
            // 'mobiletel': new FormControl('', [Validators.required, this.CheckMobileNumber.bind(this)]),
            // 'landtel': new FormControl('', [this.CheckLandlineNumber.bind(this)])
        });
    }

    CheckMobileNumber(control: FormControl): { [s: string]: boolean } {
        this.mobiletel = control.value;
        this.mobiletelLength = this.mobiletel.replace(/[-_() ]/g,'').length;
        if (this.mobiletelLength != 10) {
            return { 'MobileValid': true };
        } else {
        return null;
        }
    }

    CheckLandlineNumber(control: FormControl): { [s: string]: boolean } {
        this.landtel = control.value;
        this.landtelLength = this.landtel.replace(/[-_() ]/g,'').length;
        if (this.landtelLength != 10 && this.landtelLength != 0) {
            return { 'LandlineValid': true };
        } else {
        return null;
        }
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Personal Information',  this.Q15.value, this.StartTime.toString(), (new Date).toString()));

        this.router.navigateByUrl('/q16', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq14', { skipLocationChange: true });
    }
}
