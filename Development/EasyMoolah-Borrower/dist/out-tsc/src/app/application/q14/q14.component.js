import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import 'linq4js';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
var Q14Component = /** @class */ (function () {
    function Q14Component(zone, router, route, borrowerService, headerService) {
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.headerService = headerService;
        this.URL = false;
        this.Debug = false;
    }
    Q14Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(78);
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q14 = new FormGroup({
            'street': new FormControl('', [Validators.required]),
            'suburb': new FormControl('', [Validators.required]),
            'city': new FormControl('', [Validators.required]),
            'postalcode': new FormControl('', [Validators.required])
        });
    };
    Q14Component.prototype.getAddress = function (place) {
        var _this = this;
        this.formattedAddress = place['formatted_address'];
        console.log(place);
        // tslint:disable-next-line:max-line-length
        this.Street = place['address_components'].Where(function (w) { return w.types[0] === 'street_number'; }).Select(function (s) { return s.long_name; })[0] + ' ' + place['address_components'][1].long_name;
        this.Suburb = place['address_components'].Where(function (w) { return w.types[0] === 'administrative_area_level_2'; }).Select(function (s) { return s.long_name; })[0];
        this.City = place['address_components'].Where(function (w) { return w.types[0] === 'administrative_area_level_1'; }).Select(function (s) { return s.long_name; })[0];
        this.PostalCode = place['address_components'].Where(function (w) { return w.types[0] === 'postal_code'; }).Select(function (s) { return s.long_name; })[0];
        this.zone.run(function () { return _this.formattedAddress = place['formatted_address']; });
    };
    Q14Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Address?', this.Q14.value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q15', { skipLocationChange: true });
    };
    Q14Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq13', { skipLocationChange: true });
    };
    Q14Component = tslib_1.__decorate([
        Component({
            selector: 'app-q14',
            templateUrl: './q14.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css', './q14.component.css'],
            animations: [routerTransition]
        }),
        tslib_1.__metadata("design:paramtypes", [NgZone,
            Router,
            ActivatedRoute,
            BorrowerService,
            HeaderService])
    ], Q14Component);
    return Q14Component;
}());
export { Q14Component };
//# sourceMappingURL=q14.component.js.map