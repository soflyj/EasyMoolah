import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q5Component = /** @class */ (function () {
    function Q5Component(router, route, borrowerService, headerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q5Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(24);
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q5 = new FormGroup({
            'insolvent': new FormControl('', [Validators.required]),
        });
    };
    Q5Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Have you applied for or been declared insolvent?', this.Q5.get('insolvent').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q6', { skipLocationChange: true });
    };
    Q5Component.prototype.Back = function () {
        this.router.navigateByUrl('/q4', { skipLocationChange: true });
    };
    Q5Component = tslib_1.__decorate([
        Component({
            selector: 'app-q5',
            templateUrl: './q5.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q5Component);
    return Q5Component;
}());
export { Q5Component };
//# sourceMappingURL=q5.component.js.map