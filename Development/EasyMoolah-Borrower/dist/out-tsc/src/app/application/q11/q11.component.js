import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';
var Q11Component = /** @class */ (function () {
    function Q11Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q11Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(60);
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q11 = new FormGroup({
            'bank': new FormControl('', [Validators.required]),
        });
    };
    Q11Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'With which bank do you have an account?', this.Q11.get('bank').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q12', { skipLocationChange: true });
    };
    Q11Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq10', { skipLocationChange: true });
    };
    Q11Component = tslib_1.__decorate([
        Component({
            selector: 'app-q11',
            templateUrl: './q11.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q11Component);
    return Q11Component;
}());
export { Q11Component };
//# sourceMappingURL=q11.component.js.map