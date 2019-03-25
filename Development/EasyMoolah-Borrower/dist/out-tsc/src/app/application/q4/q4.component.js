import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';
var Q4Component = /** @class */ (function () {
    function Q4Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q4Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(18);
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q4 = new FormGroup({
            'formal-debt-review': new FormControl('', [Validators.required]),
        });
    };
    Q4Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Have you applied for or are you under formal debt review?', this.Q4.get('formal-debt-review').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q5', { skipLocationChange: true });
    };
    Q4Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq3', { skipLocationChange: true });
    };
    Q4Component = tslib_1.__decorate([
        Component({
            selector: 'app-q4',
            templateUrl: './q4.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q4Component);
    return Q4Component;
}());
export { Q4Component };
//# sourceMappingURL=q4.component.js.map