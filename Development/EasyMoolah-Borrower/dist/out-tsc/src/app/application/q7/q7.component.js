import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';
var Q7Component = /** @class */ (function () {
    function Q7Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q7Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(36);
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q7 = new FormGroup({
            'employment-status': new FormControl('', [Validators.required]),
        });
    };
    Q7Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'What\'s your employment status?', this.Q7.get('employment-status').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q8', { skipLocationChange: true });
    };
    Q7Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq6', { skipLocationChange: true });
    };
    Q7Component = tslib_1.__decorate([
        Component({
            selector: 'app-q7',
            templateUrl: './q7.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q7Component);
    return Q7Component;
}());
export { Q7Component };
//# sourceMappingURL=q7.component.js.map