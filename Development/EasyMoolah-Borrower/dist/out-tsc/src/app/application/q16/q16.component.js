import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q16Component = /** @class */ (function () {
    function Q16Component(zone, router, route, borrowerService, headerService) {
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
        this.maxLength = 13;
    }
    Q16Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(100);
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q16 = new FormGroup({
            'idnumber': new FormControl('', [Validators.required, this.CheckSAIdNumber.bind(this)])
        });
    };
    Q16Component.prototype.CheckSAIdNumber = function (control) {
        this.idnumber = control.value;
        // tslint:disable-next-line:max-line-length
        this.pattern = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
        if (!(this.pattern.test(this.idnumber) && this.idnumber.length == 13)) {
            return { 'IdNumberValid': true };
        }
        else {
            return null;
        }
    };
    Q16Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'ID Number', this.Q16.value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/processing', { skipLocationChange: true });
    };
    Q16Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq15', { skipLocationChange: true });
    };
    Q16Component = tslib_1.__decorate([
        Component({
            selector: 'app-q16',
            templateUrl: './q16.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [NgZone,
            Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q16Component);
    return Q16Component;
}());
export { Q16Component };
//# sourceMappingURL=q16.component.js.map