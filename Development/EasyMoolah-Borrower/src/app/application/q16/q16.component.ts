import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';

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

    saIdParser: any;
    require: any;
    idnumber: string;
    isIdNumberValid: boolean;
    Fmask: any;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private headerservice: HeaderService) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.headerservice.progress.next(100);

        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

    // tslint:disable-next-line:max-line-length
    //    this.Fmask = '/^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/';

        this.idnumber = '';
        this.Q16 = new FormGroup({
            'idnumber': new FormControl('', [Validators.required])
            // 'idnumber': new FormControl('', [Validators.required])
        });



    }

    CheckSAIdNumber(control: FormControl): { [s: string]: boolean } {
        this.saIdParser = this.require('south-african-id-parser');
        this.isIdNumberValid = this.saIdParser.validate(control.value);
        console.log(this.saIdParser(control.value));
        if (!this.isIdNumberValid) {
            return { 'IdNumberValid': true };
        } else {
            return null;
        }
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'ID Number', this.Q16.value, this.StartTime.toString(), (new Date).toString()));

        this.router.navigateByUrl('/processing', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq15', { skipLocationChange: true });
    }




    // validateID() {
    //     let cb = true;
    //     let ex = ''
    //     if (cb) {
    // tslint:disable-next-line:max-line-length
    //         this.Fmask = '/^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/';
    //     } else {
    //         // some other validation here
    //         ex = '/^[0-9]{1,}$/';
    //     }

    //     let theIDnumber = '8508155062080';
    //     if (ex.test(theIDnumber) == false) {
    //         // alert code goes here
    //         alert('Please supply a valid ID number');
    //         return false;
    //     }
    //     return true;
    // }
}
