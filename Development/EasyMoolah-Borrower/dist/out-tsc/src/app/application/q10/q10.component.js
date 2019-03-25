import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q10Component = /** @class */ (function () {
    function Q10Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q10Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(54);
        this.monthlyexpense_slider = '50000'; // Default range
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q10Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'What\'s your total monthly expense?', this.monthlyexpense_slider, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q11', { skipLocationChange: true });
    };
    Q10Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq9', { skipLocationChange: true });
    };
    Q10Component = tslib_1.__decorate([
        Component({
            selector: 'app-q10',
            templateUrl: './q10.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q10Component);
    return Q10Component;
}());
export { Q10Component };
//# sourceMappingURL=q10.component.js.map