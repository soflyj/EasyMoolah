import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
    selector: 'app-q16',
    templateUrl: './q16.component.html',
    styleUrls: ['./q16.component.css'],
    animations: [routerTransition]
})
export class Q16Component implements OnInit {

    Q16: FormGroup;
    URL = false;
    StartTime: Date;
    saIdParser: any;
    require: any;
    idnumber: string;
    isIdNumberValid: boolean;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.idnumber = '';
        this.Q16 = new FormGroup({
            'idnumber': new FormControl('', [Validators.required, this.CheckSAIdNumber.bind(this)])
        });

    }

    CheckSAIdNumber(control: FormControl): { [s: string]: boolean } {
        this.saIdParser = require('south-african-id-parser');
        this.isIdNumberValid = this.saIdParser.validate(control.value);
        console.log(control.value);
        if (!this.isIdNumberValid) {
            return { 'IdNumberValid': true };
        } else {
        return null;
        }
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Question', 'ID Number', this.Q16.value, this.StartTime.toString(), (new Date).toString()));

        this.router.navigateByUrl('/processing', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq15', { skipLocationChange: true });
    }
}
