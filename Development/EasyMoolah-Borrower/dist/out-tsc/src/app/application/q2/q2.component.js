import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q2Component = /** @class */ (function () {
    function Q2Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q2Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(6);
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q2 = new FormGroup({
            'sub-service': new FormControl('', [Validators.required]),
        });
    };
    Q2Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'What type of automobile repair?', this.Q2.get('sub-service').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q3', { skipLocationChange: true });
    };
    Q2Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq1', { skipLocationChange: true });
    };
    Q2Component = tslib_1.__decorate([
        Component({
            selector: 'app-q2',
            templateUrl: './q2.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q2Component);
    return Q2Component;
}());
export { Q2Component };
//# sourceMappingURL=q2.component.js.map