import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';

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
        private headerService: HeaderService) { }

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

        this.router.navigateByUrl('/processing', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq15', { skipLocationChange: true });
    }
}
