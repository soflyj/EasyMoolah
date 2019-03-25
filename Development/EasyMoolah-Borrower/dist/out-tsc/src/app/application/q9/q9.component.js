import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q9Component = /** @class */ (function () {
    function Q9Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q9Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(48);
        this.nettincome_slider = '50000'; // Default range
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q9Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'What\'s your nett monthly income?', this.nettincome_slider, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q10', { skipLocationChange: true });
    };
    Q9Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq8', { skipLocationChange: true });
    };
    Q9Component = tslib_1.__decorate([
        Component({
            selector: 'app-q9',
            templateUrl: './q9.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q9Component);
    return Q9Component;
}());
export { Q9Component };
//# sourceMappingURL=q9.component.js.map