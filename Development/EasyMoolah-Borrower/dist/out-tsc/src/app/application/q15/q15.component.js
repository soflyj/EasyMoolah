import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q15Component = /** @class */ (function () {
    function Q15Component(zone, router, route, borrowerService, headerService) {
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q15Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(84);
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.Q15 = new FormGroup({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'mobilenumber': new FormControl('', [Validators.required, this.CheckMobileNumber.bind(this)]),
            'landlinenumber': new FormControl('', [this.CheckLandlineNumber.bind(this)])
        });
    };
    Q15Component.prototype.CheckMobileNumber = function (control) {
        this.MobileNumber = control.value;
        this.MobileNumberLength = this.MobileNumber.replace(/[-_() ]/g, '').length;
        if (this.MobileNumberLength !== 10) {
            return { 'MobileValid': true };
        }
        else {
            return null;
        }
    };
    Q15Component.prototype.CheckLandlineNumber = function (control) {
        this.LandlineNumber = control.value;
        this.LandlineNumberLength = this.LandlineNumber.replace(/[-_() ]/g, '').length;
        if (this.LandlineNumberLength !== 10 && this.LandlineNumberLength !== 0) {
            return { 'LandlineValid': true };
        }
        else {
            return null;
        }
    };
    Q15Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Personal Information', this.Q15.value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q16', { skipLocationChange: true });
    };
    Q15Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq14', { skipLocationChange: true });
    };
    Q15Component = tslib_1.__decorate([
        Component({
            selector: 'app-q15',
            templateUrl: './q15.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css', './q15.component.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [NgZone,
            Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q15Component);
    return Q15Component;
}());
export { Q15Component };
//# sourceMappingURL=q15.component.js.map