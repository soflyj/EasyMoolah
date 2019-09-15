import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var FinancialresultComponent = /** @class */ (function () {
    function FinancialresultComponent(headerService, http) {
        this.headerService = headerService;
        this.http = http;
        console.log("jarrod");
    }
    FinancialresultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(0);
        ////////////////////////////////
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVhc3ltb29sYWgiLCJuYmYiOjE1NTM1MDY5ODgsImV4cCI6MTU1NDExMTc4OCwiaWF0IjoxNTUzNTA2OTg4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5MSJ9.pyTWLv0ImzrfQuINo_q1eDSo3jhKhkNZwwN59aRjInM',
                'X-Requested-With': 'XMLHttpRequest'
            })
        };
        var formData = new URLSearchParams();
        formData.set('first_name', 'John');
        formData.set('last_name', 'Doe');
        formData.set('cell_phone_number', '0826426395');
        formData.set('email', 'jdoe@gmail.com');
        formData.set('id_number', '8508155062080');
        formData.set('intent_id', '2');
        formData.set('gross_income', '50000');
        formData.set('net_income', '40000');
        formData.set('citizen', 'true');
        formData.set('debt_review', 'no');
        formData.set('popi', 'yes');
        formData.set('debt_review_opt', 'false');
        formData.set('repayment_period', '12');
        formData.set('expenses', '5000');
        formData.set('education', 'University');
        formData.set('street_address', '123 Park town');
        formData.set('suburb', 'Park town');
        formData.set('city', 'Johannesburg');
        formData.set('province', 'Gauteng');
        formData.set('post_code', '2193');
        formData.set('payday', '15');
        formData.set('employed', 'true');
        formData.set('company_name', 'KPMG');
        formData.set('employment_period', '5 years');
        formData.set('work_phone_number', '0111234567');
        formData.set('payment_frequency', '12');
        formData.set('bank_name', 'Capitec');
        formData.set('referee_id', '6q84vq'); //default
        console.log(formData);
        this.http.post('http://localhost:58007/api/fincheck/offer', formData.toString(), httpOptions)
            .subscribe(function (res) {
                _this.result = res.toString();
                // this.financeResult = JSON.parse(this.result);
                console.log(_this.result);
                console.log('goodbye');
                console.log(_this.financeResult);
            }, function (err) { return console.log(err); });
        ////////////////////////////////
    };
    FinancialresultComponent = tslib_1.__decorate([
        Component({
            selector: 'app-financialresult',
            templateUrl: './financialresult.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [HeaderService,
            HttpClient])
    ], FinancialresultComponent);
    return FinancialresultComponent;
}());
export { FinancialresultComponent };
//# sourceMappingURL=financialresult.component.js.map