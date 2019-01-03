import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

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

    first_name: string;
    last_name: string;
    email: string;
    mobiletel: string;
    landtel: string;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService) { }

    ngOnInit() {
        this.StartTime = new Date();

        this.Q15 = new FormGroup({
            'first_name': new FormControl('', Validators.required),
            'last_name': new FormControl('', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'mobiletel': new FormControl('', [Validators.required]),
            'landtel': new FormControl('', Validators.required)
        });
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
