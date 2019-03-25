import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q12Component = /** @class */ (function () {
    function Q12Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q12Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(66);
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q12 = new FormGroup({
            'dependants': new FormControl('', [Validators.required]),
        });
    };
    Q12Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'How many dependants do you have?', this.Q12.get('dependants').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q13', { skipLocationChange: true });
    };
    Q12Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq11', { skipLocationChange: true });
    };
    Q12Component = tslib_1.__decorate([
        Component({
            selector: 'app-q12',
            templateUrl: './q12.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q12Component);
    return Q12Component;
}());
export { Q12Component };
//# sourceMappingURL=q12.component.js.map