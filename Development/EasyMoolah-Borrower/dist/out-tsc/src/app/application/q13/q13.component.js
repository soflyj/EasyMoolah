import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q13Component = /** @class */ (function () {
    function Q13Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q13Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(72);
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q13 = new FormGroup({
            'homeowner': new FormControl('', [Validators.required]),
        });
    };
    Q13Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Are you a homeowner?', this.Q13.get('homeowner').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q14', { skipLocationChange: true });
    };
    Q13Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq12', { skipLocationChange: true });
    };
    Q13Component = tslib_1.__decorate([
        Component({
            selector: 'app-q13',
            templateUrl: './q13.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q13Component);
    return Q13Component;
}());
export { Q13Component };
//# sourceMappingURL=q13.component.js.map