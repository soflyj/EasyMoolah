import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q3Component = /** @class */ (function () {
    function Q3Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q3Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(12);
        this.borrowamount_slider = '50000'; // Default range
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q3Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'How much do you want to borrow?', this.borrowamount_slider, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q4', { skipLocationChange: true });
    };
    Q3Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq2', { skipLocationChange: true });
    };
    Q3Component = tslib_1.__decorate([
        Component({
            selector: 'app-q3',
            templateUrl: './q3.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q3Component);
    return Q3Component;
}());
export { Q3Component };
//# sourceMappingURL=q3.component.js.map