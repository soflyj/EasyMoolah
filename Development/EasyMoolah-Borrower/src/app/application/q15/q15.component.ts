import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
    selector: 'app-q15',
    templateUrl: './q15.component.html',
    styleUrls: ['../../../assets/css/em_site_theme.css'],
    animations: [routerTransition]
})
export class Q15Component implements OnInit {

    Q15: FormGroup;
    URL = false;
    StartTime: Date;

    mobiletel: string;
    mobiletelLength: number;
    landtel: string;
    landtelLength: number;
    mask: any;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService) { }

    ngOnInit() {
        this.StartTime = new Date();
        

        // Not allowed to navigate directly to component
        // this.URL = (window.location.href).includes('/application');
        // if (!this.URL) {
        //     this.router.navigate(['notfound'], { relativeTo: this.route });
        // }

        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

        this.Q15 = new FormGroup({
            'first_name': new FormControl('', Validators.required),
            'last_name': new FormControl('', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'mobiletel': new FormControl('', [Validators.required, this.CheckMobileNumber.bind(this)]),
            'landtel': new FormControl('', [this.CheckLandlineNumber.bind(this)])
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
        this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Question', 'Address?', this.Q15.value, this.StartTime.toString(), (new Date).toString()));

        this.router.navigateByUrl('/q16', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq14', { skipLocationChange: true });
    }
}
