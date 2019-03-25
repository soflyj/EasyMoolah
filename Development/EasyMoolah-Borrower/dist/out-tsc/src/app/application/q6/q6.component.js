import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';
var Q6Component = /** @class */ (function () {
    function Q6Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q6Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(30);
        this.credit_check = false;
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q6Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'I give permission for EasyMoolah to do a credit check.', this.credit_check.valueOf.toString(), this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q7', { skipLocationChange: true });
    };
    Q6Component.prototype.Back = function () {
        this.router.navigateByUrl('/q5', { skipLocationChange: true });
    };
    Q6Component = tslib_1.__decorate([
        Component({
            selector: 'app-q6',
            templateUrl: './q6.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q6Component);
    return Q6Component;
}());
export { Q6Component };
//# sourceMappingURL=q6.component.js.map