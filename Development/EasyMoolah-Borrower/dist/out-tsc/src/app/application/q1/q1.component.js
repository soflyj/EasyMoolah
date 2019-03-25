import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var Q1Component = /** @class */ (function () {
    function Q1Component(router, route, borrowerService, headerService, http) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.http = http;
        this.URL = false;
        this.Debug = false;
    }
    Q1Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(0);
        ////////////////////////////////
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVhc3ltb29sYWgiLCJuYmYiOjE1NTMwNzI4NTgsImV4cCI6MTU1MzY3NzY1OCwiaWF0IjoxNTUzMDcyODU4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5MSJ9.1Mj-cYW4gnkB4pIlBMq5WFZhStTLDN7uaFq6CxrVmSk'
            })
        };
        // const formData = new FormData();
        // formData.append('sessionId', '1');
        // formData.append('id', '1');
        var formData = new URLSearchParams();
        formData.set('sessionId', '1');
        formData.set('id', '1');
        console.log(formData);
        this.http.post('https://application.jarrod.a2hosted.com/api/Fincheck/intentbyid', formData.toString(), httpOptions)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
        ////////////////////////////////
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        // Reactive validation
        this.Q1 = new FormGroup({
            'service': new FormControl('', [Validators.required]),
        });
    };
    Q1Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.question = [new Question('Questions', 'Which service would you like a loan for?', this.Q1.get('service').value, this.StartTime.toString(), (new Date).toString())];
        this.router.navigateByUrl('/q2', { skipLocationChange: true });
    };
    Q1Component = tslib_1.__decorate([
        Component({
            selector: 'app-q1',
            templateUrl: './q1.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService,
            HttpClient])
    ], Q1Component);
    return Q1Component;
}());
export { Q1Component };
//# sourceMappingURL=q1.component.js.map