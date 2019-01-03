(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address/address.component.css":
/*!***********************************************!*\
  !*** ./src/app/address/address.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/address/address.component.html":
/*!************************************************!*\
  !*** ./src/app/address/address.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Google Places Autocomplete\r\n</h1>\r\n<div>\r\n  <h2>Home Address:</h2>\r\n\r\n  <p>\r\n    <AutocompleteComponent (setAddress)=\"getAddress($event)\" adressType=\"geocode\"></AutocompleteComponent>\r\n  </p>\r\n\r\n  <b>Address: </b> {{formattedAddress}}\r\n  <br><br>\r\n  <h2>Office Address:</h2>\r\n\r\n  <p>\r\n    <!-- <AutocompleteComponent (setAddress)=\"getEstablishmentAddress($event)\" adressType=\"establishment\"></AutocompleteComponent> -->\r\n  </p>\r\n  <b>Address:</b> {{formattedEstablishmentAddress}}\r\n  <br>\r\n  <b>Phone:</b> {{phone}}\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressComponent = /** @class */ (function () {
    function AddressComponent(zone) {
        this.zone = zone;
    }
    AddressComponent.prototype.getAddress = function (place) {
        var _this = this;
        this.address = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedAddress = place['formatted_address'];
        this.zone.run(function () { return _this.formattedAddress = place['formatted_address']; });
        // alert(this.getAddrComponent(place,{ street_number: 'short_name' } ));
    };
    AddressComponent.prototype.getEstablishmentAddress = function (place) {
        var _this = this;
        this.establishmentAddress = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedEstablishmentAddress = place['formatted_address'];
        this.zone.run(function () {
            _this.formattedEstablishmentAddress = place['formatted_address'];
            _this.phone = place['formatted_phone_number'];
        });
    };
    AddressComponent.prototype.getAddrComponent = function (place, componentTemplate) {
        var result;
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    };
    AddressComponent.prototype.getStreetNumber = function (place) {
        var COMPONENT_TEMPLATE = { street_number: 'short_name' }, streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    };
    AddressComponent.prototype.getStreet = function (place) {
        var COMPONENT_TEMPLATE = { route: 'long_name' }, street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    };
    AddressComponent.prototype.getCity = function (place) {
        var COMPONENT_TEMPLATE = { locality: 'long_name' }, city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    };
    AddressComponent.prototype.getState = function (place) {
        var COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    };
    AddressComponent.prototype.getDistrict = function (place) {
        var COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    };
    AddressComponent.prototype.getCountryShort = function (place) {
        var COMPONENT_TEMPLATE = { country: 'short_name' }, countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    };
    AddressComponent.prototype.getCountry = function (place) {
        var COMPONENT_TEMPLATE = { country: 'long_name' }, country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    };
    AddressComponent.prototype.getPostCode = function (place) {
        var COMPONENT_TEMPLATE = { postal_code: 'long_name' }, postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    };
    AddressComponent.prototype.getPhone = function (place) {
        var COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' }, phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    };
    AddressComponent.prototype.test = function () {
        alert("test");
    };
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/address/address.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _application_financialresult_financialresult_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application/financialresult/financialresult.component */ "./src/app/application/financialresult/financialresult.component.ts");
/* harmony import */ var _application_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/landing/landing.component */ "./src/app/application/landing/landing.component.ts");
/* harmony import */ var _application_q1_q1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application/q1/q1.component */ "./src/app/application/q1/q1.component.ts");
/* harmony import */ var _application_q2_q2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application/q2/q2.component */ "./src/app/application/q2/q2.component.ts");
/* harmony import */ var _application_q3_q3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/q3/q3.component */ "./src/app/application/q3/q3.component.ts");
/* harmony import */ var _application_q4_q4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application/q4/q4.component */ "./src/app/application/q4/q4.component.ts");
/* harmony import */ var _application_q5_q5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application/q5/q5.component */ "./src/app/application/q5/q5.component.ts");
/* harmony import */ var _application_q6_q6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application/q6/q6.component */ "./src/app/application/q6/q6.component.ts");
/* harmony import */ var _application_q7_q7_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application/q7/q7.component */ "./src/app/application/q7/q7.component.ts");
/* harmony import */ var _application_q8_q8_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./application/q8/q8.component */ "./src/app/application/q8/q8.component.ts");
/* harmony import */ var _application_q9_q9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./application/q9/q9.component */ "./src/app/application/q9/q9.component.ts");
/* harmony import */ var _application_q10_q10_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application/q10/q10.component */ "./src/app/application/q10/q10.component.ts");
/* harmony import */ var _application_q11_q11_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application/q11/q11.component */ "./src/app/application/q11/q11.component.ts");
/* harmony import */ var _application_q12_q12_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application/q12/q12.component */ "./src/app/application/q12/q12.component.ts");
/* harmony import */ var _application_q13_q13_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./application/q13/q13.component */ "./src/app/application/q13/q13.component.ts");
/* harmony import */ var _application_q14_q14_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./application/q14/q14.component */ "./src/app/application/q14/q14.component.ts");
/* harmony import */ var _application_q15_q15_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./application/q15/q15.component */ "./src/app/application/q15/q15.component.ts");
/* harmony import */ var _application_q16_q16_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./application/q16/q16.component */ "./src/app/application/q16/q16.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _application_processing_processing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./application/processing/processing.component */ "./src/app/application/processing/processing.component.ts");


// import { FormsModule } from '@angular/forms';






















var appRoutes = [
    { path: '', component: _application_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], pathMatch: 'full' },
    { path: 'application', component: _application_q1_q1_component__WEBPACK_IMPORTED_MODULE_5__["Q1Component"], data: { state: 'application' } },
    // Next
    { path: 'q1', component: _application_q1_q1_component__WEBPACK_IMPORTED_MODULE_5__["Q1Component"], data: { state: 'q1' } },
    { path: 'q2', component: _application_q2_q2_component__WEBPACK_IMPORTED_MODULE_6__["Q2Component"], data: { state: 'q2' } },
    { path: 'q3', component: _application_q3_q3_component__WEBPACK_IMPORTED_MODULE_7__["Q3Component"], data: { state: 'q3' } },
    { path: 'q4', component: _application_q4_q4_component__WEBPACK_IMPORTED_MODULE_8__["Q4Component"], data: { state: 'q4' } },
    { path: 'q5', component: _application_q5_q5_component__WEBPACK_IMPORTED_MODULE_9__["Q5Component"], data: { state: 'q5' } },
    { path: 'q6', component: _application_q6_q6_component__WEBPACK_IMPORTED_MODULE_10__["Q6Component"], data: { state: 'q6' } },
    { path: 'q7', component: _application_q7_q7_component__WEBPACK_IMPORTED_MODULE_11__["Q7Component"], data: { state: 'q7' } },
    { path: 'q8', component: _application_q8_q8_component__WEBPACK_IMPORTED_MODULE_12__["Q8Component"], data: { state: 'q8' } },
    { path: 'q9', component: _application_q9_q9_component__WEBPACK_IMPORTED_MODULE_13__["Q9Component"], data: { state: 'q9' } },
    { path: 'q10', component: _application_q10_q10_component__WEBPACK_IMPORTED_MODULE_14__["Q10Component"], data: { state: 'q10' } },
    { path: 'q11', component: _application_q11_q11_component__WEBPACK_IMPORTED_MODULE_15__["Q11Component"], data: { state: 'q11' } },
    { path: 'q12', component: _application_q12_q12_component__WEBPACK_IMPORTED_MODULE_16__["Q12Component"], data: { state: 'q12' } },
    { path: 'q13', component: _application_q13_q13_component__WEBPACK_IMPORTED_MODULE_17__["Q13Component"], data: { state: 'q13' } },
    { path: 'q14', component: _application_q14_q14_component__WEBPACK_IMPORTED_MODULE_18__["Q14Component"], data: { state: 'q14' } },
    { path: 'q15', component: _application_q15_q15_component__WEBPACK_IMPORTED_MODULE_19__["Q15Component"], data: { state: 'q15' } },
    { path: 'q16', component: _application_q16_q16_component__WEBPACK_IMPORTED_MODULE_20__["Q16Component"], data: { state: 'q16' } },
    // Back
    { path: 'bq1', component: _application_q1_q1_component__WEBPACK_IMPORTED_MODULE_5__["Q1Component"], data: { state: 'bq1' } },
    { path: 'bq2', component: _application_q2_q2_component__WEBPACK_IMPORTED_MODULE_6__["Q2Component"], data: { state: 'bq2' } },
    { path: 'bq3', component: _application_q3_q3_component__WEBPACK_IMPORTED_MODULE_7__["Q3Component"], data: { state: 'bq3' } },
    { path: 'bq4', component: _application_q4_q4_component__WEBPACK_IMPORTED_MODULE_8__["Q4Component"], data: { state: 'bq4' } },
    { path: 'bq5', component: _application_q5_q5_component__WEBPACK_IMPORTED_MODULE_9__["Q5Component"], data: { state: 'bq5' } },
    { path: 'bq6', component: _application_q6_q6_component__WEBPACK_IMPORTED_MODULE_10__["Q6Component"], data: { state: 'bq6' } },
    { path: 'bq7', component: _application_q7_q7_component__WEBPACK_IMPORTED_MODULE_11__["Q7Component"], data: { state: 'bq7' } },
    { path: 'bq8', component: _application_q8_q8_component__WEBPACK_IMPORTED_MODULE_12__["Q8Component"], data: { state: 'bq8' } },
    { path: 'bq9', component: _application_q9_q9_component__WEBPACK_IMPORTED_MODULE_13__["Q9Component"], data: { state: 'bq9' } },
    { path: 'bq10', component: _application_q10_q10_component__WEBPACK_IMPORTED_MODULE_14__["Q10Component"], data: { state: 'bq10' } },
    { path: 'bq11', component: _application_q11_q11_component__WEBPACK_IMPORTED_MODULE_15__["Q11Component"], data: { state: 'bq11' } },
    { path: 'bq12', component: _application_q12_q12_component__WEBPACK_IMPORTED_MODULE_16__["Q12Component"], data: { state: 'bq12' } },
    { path: 'bq13', component: _application_q13_q13_component__WEBPACK_IMPORTED_MODULE_17__["Q13Component"], data: { state: 'bq13' } },
    { path: 'bq14', component: _application_q14_q14_component__WEBPACK_IMPORTED_MODULE_18__["Q14Component"], data: { state: 'bq14' } },
    { path: 'bq15', component: _application_q15_q15_component__WEBPACK_IMPORTED_MODULE_19__["Q15Component"] },
    { path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_22__["AddressComponent"], data: { state: 'address' } },
    { path: 'processing', component: _application_processing_processing_component__WEBPACK_IMPORTED_MODULE_23__["ProcessingComponent"], data: { state: 'processing' } },
    { path: 'financialresult', component: _application_financialresult_financialresult_component__WEBPACK_IMPORTED_MODULE_3__["FinancialresultComponent"], data: { state: 'financialresult' } },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"] },
    { path: 'notfound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"col-md-8\"></div>\r\n<div class=\"col-md-4\">\r\n    <div [@routerTransition]=\"getState(o)\">\r\n        <router-outlet #o=\"outlet\"></router-outlet>\r\n    </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/router.animations */ "./src/app/common/router.animations.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sample2';
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _google_places_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-places.component */ "./src/app/google-places.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_borrower_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var _common_googlemaps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/googlemaps.service */ "./src/app/common/googlemaps.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _application_financialresult_financialresult_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./application/financialresult/financialresult.component */ "./src/app/application/financialresult/financialresult.component.ts");
/* harmony import */ var _application_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application/landing/landing.component */ "./src/app/application/landing/landing.component.ts");
/* harmony import */ var _application_q1_q1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application/q1/q1.component */ "./src/app/application/q1/q1.component.ts");
/* harmony import */ var _application_q2_q2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application/q2/q2.component */ "./src/app/application/q2/q2.component.ts");
/* harmony import */ var _application_q3_q3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./application/q3/q3.component */ "./src/app/application/q3/q3.component.ts");
/* harmony import */ var _application_q4_q4_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./application/q4/q4.component */ "./src/app/application/q4/q4.component.ts");
/* harmony import */ var _application_q5_q5_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./application/q5/q5.component */ "./src/app/application/q5/q5.component.ts");
/* harmony import */ var _application_q6_q6_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./application/q6/q6.component */ "./src/app/application/q6/q6.component.ts");
/* harmony import */ var _application_q7_q7_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./application/q7/q7.component */ "./src/app/application/q7/q7.component.ts");
/* harmony import */ var _application_q8_q8_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./application/q8/q8.component */ "./src/app/application/q8/q8.component.ts");
/* harmony import */ var _application_q9_q9_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./application/q9/q9.component */ "./src/app/application/q9/q9.component.ts");
/* harmony import */ var _application_q10_q10_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./application/q10/q10.component */ "./src/app/application/q10/q10.component.ts");
/* harmony import */ var _application_q11_q11_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./application/q11/q11.component */ "./src/app/application/q11/q11.component.ts");
/* harmony import */ var _application_q12_q12_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./application/q12/q12.component */ "./src/app/application/q12/q12.component.ts");
/* harmony import */ var _application_q13_q13_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./application/q13/q13.component */ "./src/app/application/q13/q13.component.ts");
/* harmony import */ var _application_q14_q14_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./application/q14/q14.component */ "./src/app/application/q14/q14.component.ts");
/* harmony import */ var _application_q15_q15_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./application/q15/q15.component */ "./src/app/application/q15/q15.component.ts");
/* harmony import */ var _application_q16_q16_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./application/q16/q16.component */ "./src/app/application/q16/q16.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _application_processing_processing_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./application/processing/processing.component */ "./src/app/application/processing/processing.component.ts");

// Angular modules







// Services


// Components

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _application_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
                _application_q1_q1_component__WEBPACK_IMPORTED_MODULE_15__["Q1Component"],
                _application_q2_q2_component__WEBPACK_IMPORTED_MODULE_16__["Q2Component"],
                _application_q3_q3_component__WEBPACK_IMPORTED_MODULE_17__["Q3Component"],
                _application_q4_q4_component__WEBPACK_IMPORTED_MODULE_18__["Q4Component"],
                _application_q5_q5_component__WEBPACK_IMPORTED_MODULE_19__["Q5Component"],
                _application_q6_q6_component__WEBPACK_IMPORTED_MODULE_20__["Q6Component"],
                _application_q7_q7_component__WEBPACK_IMPORTED_MODULE_21__["Q7Component"],
                _application_q8_q8_component__WEBPACK_IMPORTED_MODULE_22__["Q8Component"],
                _application_q9_q9_component__WEBPACK_IMPORTED_MODULE_23__["Q9Component"],
                _application_q10_q10_component__WEBPACK_IMPORTED_MODULE_24__["Q10Component"],
                _application_q11_q11_component__WEBPACK_IMPORTED_MODULE_25__["Q11Component"],
                _application_q12_q12_component__WEBPACK_IMPORTED_MODULE_26__["Q12Component"],
                _application_q13_q13_component__WEBPACK_IMPORTED_MODULE_27__["Q13Component"],
                _application_q14_q14_component__WEBPACK_IMPORTED_MODULE_28__["Q14Component"],
                _application_q15_q15_component__WEBPACK_IMPORTED_MODULE_29__["Q15Component"],
                _application_q16_q16_component__WEBPACK_IMPORTED_MODULE_30__["Q16Component"],
                _application_financialresult_financialresult_component__WEBPACK_IMPORTED_MODULE_13__["FinancialresultComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_32__["ErrorComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_33__["AddressComponent"],
                _google_places_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"],
                _application_processing_processing_component__WEBPACK_IMPORTED_MODULE_34__["ProcessingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"]
            ],
            providers: [_service_borrower_service__WEBPACK_IMPORTED_MODULE_8__["BorrowerService"], _common_googlemaps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMaps"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/financialresult/financialresult.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/application/financialresult/financialresult.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col m6 offset-m3\">\r\n      <div class=\"introduction center-align\">\r\n        <h2>FSP Results</h2>\r\n      </div>\r\n      <div class=\"row\">\r\n        <table width=\"100%\">\r\n          <thead>\r\n            <tr>\r\n              <td width=\"30%\" style=\"font-style: italic\"></td>\r\n              <td width=\"40%\" align=\"right\" style=\"text-align: right; font-style: italic\"></td>\r\n              <td width=\"30%\"></td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let fsp of financeResults; let i = index\">              \r\n              <td><img src=\"{{fsp.ImagePath}}\" class=\"responsive-img\" alt=\"{{fsp.ImageAlt}}\" /></td>\r\n              <td align=\"right\" style=\"text-align: right\"><label>Loan approved for</label><br><strong>{{'R ' + fsp.ApprovedAmount}}</strong></td>\r\n              <td align=\"right\" style=\"text-align: right\"><a class=\"waves-effect waves-light btn-small\">Call Me</a></td>\r\n            </tr>            \r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col m6 offset-m3\">\r\n      <div class=\"col s12\">\r\n        <p class=\"center-align\">Congratulations on getting approval for your loan amount. Please click on the 'call me'\r\n          button next to any of the service providers so that a consultant can call you back today!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n  crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('select').formSelect();\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/application/financialresult/financialresult.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/application/financialresult/financialresult.component.ts ***!
  \**************************************************************************/
/*! exports provided: FinancialresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialresultComponent", function() { return FinancialresultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_financeresult_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/financeresult.model */ "./src/app/model/financeresult.model.ts");



var FinancialresultComponent = /** @class */ (function () {
    function FinancialresultComponent() {
        this.financeResults = [
            new _model_financeresult_model__WEBPACK_IMPORTED_MODULE_2__["FinanceResult"](15000, 'Old Mutual', '../../../assets/images/fsp-logos/oldmutual.png', 'old mutual'),
            new _model_financeresult_model__WEBPACK_IMPORTED_MODULE_2__["FinanceResult"](2000, 'Standard Bank', '../../../assets/images/fsp-logos/standardbank.png', 'standard bank'),
            new _model_financeresult_model__WEBPACK_IMPORTED_MODULE_2__["FinanceResult"](5000, 'Capfin', '../../../assets/images/fsp-logos/capfin.png', 'capfin'),
            new _model_financeresult_model__WEBPACK_IMPORTED_MODULE_2__["FinanceResult"](100000, 'DirectAxis', '../../../assets/images/fsp-logos/directaxis.png', 'directaxis')
        ];
    }
    FinancialresultComponent.prototype.ngOnInit = function () {
    };
    FinancialresultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-financialresult',
            template: __webpack_require__(/*! ./financialresult.component.html */ "./src/app/application/financialresult/financialresult.component.html"),
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinancialresultComponent);
    return FinancialresultComponent;
}());



/***/ }),

/***/ "./src/app/application/landing/landing.component.html":
/*!************************************************************!*\
  !*** ./src/app/application/landing/landing.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"introduction center-align\">\r\n\t\t\t\t<h2>How does EasyMoolah work?</h2>\r\n\t\t\t\t<p>You tell us your financial goals, we give you the resources to get where you want to be.</p><p>Compare rates, services, and features offered by different financial service providers.</p>\r\n\t\t\t\t<p>Fill out one simple form and get competing offers to find your best option.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div><!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"col s12\">\r\n        <a class=\"waves-effect waves-light btn-large center-align-btn\" [routerLink]=\"[ '/application']\">Begin</a>        \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n<!-- <link rel=\"stylesheet\" href=\"../../../assets/css/em_site_theme.css \" type=\"text/css\"> -->\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\">\r\n\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n<script>\r\n  $(document).ready(function(){\r\n    $('select').formSelect();\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/application/landing/landing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/application/landing/landing.component.ts ***!
  \**********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/application/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/application/processing/processing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/application/processing/processing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col m6 offset-m3\">\r\n      <div class=\"introduction center-align\">\r\n        <h2>Application submitted</h2>\r\n        <p>Please wait while we check the potential loan providers</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col m6 offset-m3\">\r\n      <div class=\"col s12\">\r\n        <div class=\"progress\">\r\n          <div class=\"indeterminate\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n  crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('select').formSelect();\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/application/processing/processing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/application/processing/processing.component.ts ***!
  \****************************************************************/
/*! exports provided: ProcessingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessingComponent", function() { return ProcessingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProcessingComponent = /** @class */ (function () {
    function ProcessingComponent(router) {
        this.router = router;
    }
    ProcessingComponent.prototype.ngOnInit = function () {
        this.go_next();
    };
    ProcessingComponent.prototype.go_next = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl('/financialresult', { skipLocationChange: true });
        }, 3000);
    };
    ProcessingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-processing',
            template: __webpack_require__(/*! ./processing.component.html */ "./src/app/application/processing/processing.component.html"),
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProcessingComponent);
    return ProcessingComponent;
}());



/***/ }),

/***/ "./src/app/application/q1/q1.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q1/q1.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q1\" (ngSubmit)=\"Next()\">  \r\n  <div class=\"divider\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"progress page-progress\">\r\n          <div class=\"determinate\" style=\"width: 6.25%\"></div>\r\n        </div>\r\n        <div class=\"image-radio-buttons service-options\">\r\n          <p>Which service would you like a loan for?</p>\r\n          <div class=\"radio-group\">\r\n            <input type=\"radio\" name=\"service\" id=\"auto-repair\" value=\"auto-repair\" class=\"input-hidden\" formControlName=\"service\"/>\r\n            <label for=\"auto-repair\" class=\"col s6 m3\">\r\n              <svg viewBox=\"0 0 24 24\">\r\n                <path d=\"M16,6L19,10H21C22.11,10 23,10.89 23,12V15H21A3,3 0 0,1 18,18A3,3 0 0,1 15,15H9A3,3 0 0,1 6,18A3,3 0 0,1 3,15H1V12C1,10.89 1.89,10 3,10L6,6H16M10.5,7.5H6.75L4.86,10H10.5V7.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5A1.5,1.5 0 0,0 4.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 6,13.5M18,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0 18,16.5A1.5,1.5 0 0,0 19.5,15A1.5,1.5 0 0,0 18,13.5Z\" />\r\n              </svg>\r\n              <br><strong>Auto Repair</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"funeral-service\" value=\"funeral-service\" class=\"input-hidden\"  formControlName=\"service\"/>\r\n            <label for=\"funeral-service\" class=\"col s6 m3\">\r\n              <svg viewBox=\"0 0 24 24\">\r\n                <path d=\"M8,22L5,8L8,2H16L19,8L16,22H8M11,6V8H9V10H11V15H13V10H15V8H13V6H11Z\" />\r\n              </svg>\r\n              <br><strong>Funeral Service</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"engagement-wedding\" value=\"engagement-wedding\" class=\"input-hidden\"  formControlName=\"service\"/>\r\n            <label for=\"engagement-wedding\" class=\"col s6 m3\">\r\n              <svg viewBox=\"0 0 24 24\">\r\n                <path d=\"M12,10L8,4.4L9.6,2H14.4L16,4.4L12,10M15.5,6.8L14.3,8.5C16.5,9.4 18,11.5 18,14A6,6 0 0,1 12,20A6,6 0 0,1 6,14C6,11.5 7.5,9.4 9.7,8.5L8.5,6.8C5.8,8.1 4,10.8 4,14A8,8 0 0,0 12,22A8,8 0 0,0 20,14C20,10.8 18.2,8.1 15.5,6.8Z\" />\r\n              </svg>\r\n              <br><strong>Engagement / Wedding</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"home-improvement\" value=\"home-improvement\" class=\"input-hidden\"  formControlName=\"service\"/>\r\n            <label for=\"home-improvement\" class=\"col s6 m3\">\r\n              <svg viewBox=\"0 0 24 24\">\r\n                <path d=\"M12,3L2,12H5V20H19V12H22L12,3M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z\" />\r\n              </svg>\r\n              <br><strong>Home Improvement</strong>\r\n            </label>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"col m4\">\r\n          <!-- <a class=\"waves-effect waves-light btn-small disabled\" (click)=\"\"><i class=\"material-icons left\">chevron_left</i>Prev</a> -->\r\n        </div>\r\n        <div class=\"col m4\">\r\n        </div>\r\n        <div class=\"col m4\">\r\n          <!-- <a class=\"waves-effect waves-light btn-small\" (click)=\"next()\"><i class=\"material-icons right\">chevron_right</i>Next</a> -->\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q1.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q1/q1.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q1/q1.component.ts ***!
  \************************************************/
/*! exports provided: Q1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q1Component", function() { return Q1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q1Component = /** @class */ (function () {
    function Q1Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q1Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'service': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q1Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.borrowerapplicationlog = [new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Questions', 'Which service would you like a loan for?', this.Q1.get('service').value, this.StartTime.toString(), (new Date).toString())];
        this.router.navigateByUrl('/q2', { skipLocationChange: true });
    };
    Q1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q1',
            template: __webpack_require__(/*! ./q1.component.html */ "./src/app/application/q1/q1.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q1Component);
    return Q1Component;
}());



/***/ }),

/***/ "./src/app/application/q10/q10.component.html":
/*!****************************************************!*\
  !*** ./src/app/application/q10/q10.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t<div class=\"determinate\" style=\"width: 62.5%\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input-field\">\r\n\t\t\t\t<p>What's your total monthly expense?</p>\r\n\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t<input [(ngModel)]=\"monthlyexpense_slider\" type=\"range\" id=\"monthlyexpense_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t value=\"50000\" />\r\n\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t<p>R {{monthlyexpense_slider}}</p>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n\t<div class=\"row pagination-btns\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>"

/***/ }),

/***/ "./src/app/application/q10/q10.component.ts":
/*!**************************************************!*\
  !*** ./src/app/application/q10/q10.component.ts ***!
  \**************************************************/
/*! exports provided: Q10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q10Component", function() { return Q10Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");






var Q10Component = /** @class */ (function () {
    function Q10Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q10Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.monthlyexpense_slider = '50000'; // Default range
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q10Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__["BorrowerApplicationLog"]('Questions', 'What\'s your total monthly expense?', this.monthlyexpense_slider, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q11', { skipLocationChange: true });
    };
    Q10Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq9', { skipLocationChange: true });
    };
    Q10Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q10',
            template: __webpack_require__(/*! ./q10.component.html */ "./src/app/application/q10/q10.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__["BorrowerService"]])
    ], Q10Component);
    return Q10Component;
}());



/***/ }),

/***/ "./src/app/application/q11/q11.component.html":
/*!****************************************************!*\
  !*** ./src/app/application/q11/q11.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q11\" (ngSubmit)=\"Next()\">\r\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n  <div class=\"divider\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"progress page-progress\">\r\n          <div class=\"determinate\" style=\"width: 68.75%\"></div>\r\n        </div>\r\n        <div class=\"input-field\">\r\n          <div class=\"image-radio-buttons bank-options\">\r\n            <p>With which bank do you have an account?</p>\r\n            <div class=\"radio-group\">\r\n              <div class=\"row\">\r\n                <input type=\"radio\" name=\"bank\" id=\"absa-bank-option\" formControlName=\"bank\" value=\"absa-bank\" />\r\n                <label for=\"absa-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"absa-logo\"></span>\r\n                </label>\r\n\r\n                <input type=\"radio\" name=\"bank\" id=\"standardbank-bank-option\" class=\"input-hidden\" formControlName=\"bank\"\r\n                  value=\"standardbank-bank\" />\r\n                <label for=\"standardbank-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"sb-logo\"></span>\r\n                </label>\r\n\r\n                <input type=\"radio\" name=\"bank\" id=\"fnb-bank-option\" class=\"input-hidden\" formControlName=\"bank\" value=\"fnb-bank\" />\r\n                <label for=\"fnb-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"fnb-logo\"></span>\r\n                </label>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <input type=\"radio\" name=\"bank\" id=\"nedbank-bank-option\" class=\"input-hidden\" formControlName=\"bank\"\r\n                  value=\"nedbank-bank\" />\r\n                <label for=\"nedbank-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"nedbank-logo\"></span>\r\n                </label>\r\n\r\n                <input type=\"radio\" name=\"bank\" id=\"capitec-bank-option\" class=\"input-hidden\" formControlName=\"bank\"\r\n                  value=\"capitec-bank\" />\r\n                <label for=\"capitec-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"capitec-logo\"></span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n\t<footer class=\"container\">\r\n      <div class=\"row pagination-btns\">\r\n        <div class=\"col m6 offset-m3\">\r\n          <div class=\"col m4\">\r\n            <button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n          </div>\r\n          <div class=\"col m4\">\r\n          </div>\r\n          <div class=\"col m4\">\r\n            <button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q11.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q11/q11.component.ts":
/*!**************************************************!*\
  !*** ./src/app/application/q11/q11.component.ts ***!
  \**************************************************/
/*! exports provided: Q11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q11Component", function() { return Q11Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q11Component = /** @class */ (function () {
    function Q11Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q11Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q11 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'bank': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q11Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'With which bank do you have an account?', this.Q11.get('bank').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q12', { skipLocationChange: true });
    };
    Q11Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq10', { skipLocationChange: true });
    };
    Q11Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q11',
            template: __webpack_require__(/*! ./q11.component.html */ "./src/app/application/q11/q11.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q11Component);
    return Q11Component;
}());



/***/ }),

/***/ "./src/app/application/q12/q12.component.html":
/*!****************************************************!*\
  !*** ./src/app/application/q12/q12.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q12\" (ngSubmit)=\"Next()\">\r\n  <div class=\"divider\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"progress page-progress\">\r\n          <div class=\"determinate\" style=\"width: 75%\"></div>\r\n        </div>\r\n        <div class=\"input-field\">\r\n          <p>How many dependants do you have?</p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"0\" />\r\n              <span>0</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"1\" />\r\n              <span>1</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"2\" />\r\n              <span>2</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"3\" />\r\n              <span>3</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"4\" />\r\n              <span>4</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"4+\" />\r\n              <span>4+</span> </label>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"col m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col m4\">\r\n        </div>\r\n        <div class=\"col m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q12.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q12/q12.component.ts":
/*!**************************************************!*\
  !*** ./src/app/application/q12/q12.component.ts ***!
  \**************************************************/
/*! exports provided: Q12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q12Component", function() { return Q12Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q12Component = /** @class */ (function () {
    function Q12Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q12Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        // this.URL = (window.location.href).includes('/application');
        // if (!this.URL) {
        //     this.router.navigate(['notfound'], { relativeTo: this.route });
        // }
        this.Q12 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'dependants': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q12Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'How many dependants do you have?', this.Q12.get('dependants').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q13', { skipLocationChange: true });
    };
    Q12Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq11', { skipLocationChange: true });
    };
    Q12Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q12',
            template: __webpack_require__(/*! ./q12.component.html */ "./src/app/application/q12/q12.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q12Component);
    return Q12Component;
}());



/***/ }),

/***/ "./src/app/application/q13/q13.component.html":
/*!****************************************************!*\
  !*** ./src/app/application/q13/q13.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q13\" (ngSubmit)=\"Next()\">\r\n  <div class=\"divider\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"progress page-progress\">\r\n          <div class=\"determinate\" style=\"width: 81.25%\"></div>\r\n        </div>\r\n        <div class=\"input-field\">\r\n          <p>Are you a homeowner?</p>\r\n          <p>\r\n            <label>\r\n              <input name=\"homeowner\" type=\"radio\" class=\"with-gap\" formControlName=\"homeowner\" value=\"yes\" />\r\n              <span>Yes</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"homeowner\" type=\"radio\" class=\"with-gap\" formControlName=\"homeowner\" value=\"renting\" />\r\n              <span>Renting</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"homeowner\" type=\"radio\" class=\"with-gap\" formControlName=\"homeowner\" value=\"living-with-family\" />\r\n              <span>Living with family</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"homeowner\" type=\"radio\" class=\"with-gap\" formControlName=\"homeowner\" value=\"other\" />\r\n              <span>Other</span> </label>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"col m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col m4\">\r\n        </div>\r\n        <div class=\"col m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q13.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q13/q13.component.ts":
/*!**************************************************!*\
  !*** ./src/app/application/q13/q13.component.ts ***!
  \**************************************************/
/*! exports provided: Q13Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q13Component", function() { return Q13Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q13Component = /** @class */ (function () {
    function Q13Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q13Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q13 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'homeowner': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q13Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'Are you a homeowner?', this.Q13.get('homeowner').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q14', { skipLocationChange: true });
    };
    Q13Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq12', { skipLocationChange: true });
    };
    Q13Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q13',
            template: __webpack_require__(/*! ./q13.component.html */ "./src/app/application/q13/q13.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q13Component);
    return Q13Component;
}());



/***/ }),

/***/ "./src/app/application/q14/q14.component.html":
/*!****************************************************!*\
  !*** ./src/app/application/q14/q14.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q14\" (ngSubmit)=\"Next()\">\r\n  <div class=\"divider\">\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"progress page-progress\">\r\n          <div class=\"determinate\" style=\"width: 87.5%\"></div>\r\n        </div>\r\n        <div class=\"input-field\">\r\n          <p>What's your home address?</p>\r\n          <div class=\"group\">\r\n            <!-- <p> -->\r\n            <div class=\"input-field\">\r\n              <AutocompleteComponent (setAddress)=\"getAddress($event)\" adressType=\"geocode\"></AutocompleteComponent>\r\n            </div>\r\n            <!-- </p> -->\r\n            <div class=\"input-field\">\r\n              <input [(ngModel)]=\"Street\" id=\"Street\" type=\"text\" formControlName=\"street\">\r\n              <label for=\"street\">Street</label>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <input [(ngModel)]=\"Suburb\" id=\"Suburb\" type=\"text\" readonly formControlName=\"suburb\">\r\n              <label for=\"suburb\">Suburb</label>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <input [(ngModel)]=\"City\" id=\"City\" type=\"text\" readonly formControlName=\"city\">\r\n              <label for=\"city\">City</label>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <input [(ngModel)]=\"PostalCode\" id=\"PostalCode\" type=\"text\" readonl formControlName=\"postalcode\">\r\n              <label for=\"postalcode\">Postal Code</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"container\">\r\n      <div class=\"row pagination-btns\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"col m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col m4\">\r\n        </div>\r\n        <div class=\"col m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  </footer>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q14/q14.component.ts":
/*!**************************************************!*\
  !*** ./src/app/application/q14/q14.component.ts ***!
  \**************************************************/
/*! exports provided: Q14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q14Component", function() { return Q14Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");
/* harmony import */ var linq4js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! linq4js */ "./node_modules/linq4js/dist/linq4js.js");
/* harmony import */ var linq4js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(linq4js__WEBPACK_IMPORTED_MODULE_7__);








var Q14Component = /** @class */ (function () {
    function Q14Component(zone, router, route, borrowerService) {
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q14Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        // this.URL = (window.location.href).includes('/application');
        // if (!this.URL) {
        //     this.router.navigate(['notfound'], { relativeTo: this.route });
        // }
        this.Q14 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'street': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'suburb': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'postalcode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    Q14Component.prototype.getAddress = function (place) {
        var _this = this;
        this.formattedAddress = place['formatted_address'];
        // tslint:disable-next-line:max-line-length
        this.Street = place['address_components'].Where(function (w) { return w.types[0] === 'street_number'; }).Select(function (s) { return s.long_name; })[0] + ' ' + place['address_components'].Where(function (w) { return w.types[0] === 'street_number'; }).Select(function (s) { return s.long_name; })[0];
        this.Suburb = place['address_components'].Where(function (w) { return w.types[0] === 'administrative_area_level_2'; }).Select(function (s) { return s.long_name; })[0];
        this.City = place['address_components'].Where(function (w) { return w.types[0] === 'administrative_area_level_1'; }).Select(function (s) { return s.long_name; })[0];
        this.PostalCode = place['address_components'].Where(function (w) { return w.types[0] === 'postal_code'; }).Select(function (s) { return s.long_name; })[0];
        this.zone.run(function () { return _this.formattedAddress = place['formatted_address']; });
    };
    Q14Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'Address?', this.Q14.value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q15', { skipLocationChange: true });
    };
    Q14Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq13', { skipLocationChange: true });
    };
    Q14Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q14',
            template: __webpack_require__(/*! ./q14.component.html */ "./src/app/application/q14/q14.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q14Component);
    return Q14Component;
}());



/***/ }),

/***/ "./src/app/application/q15/q15.component.html":
/*!****************************************************!*\
  !*** ./src/app/application/q15/q15.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q15\" (ngSubmit)=\"Next()\">\r\n  <div class=\"divider\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"progress page-progress\">\r\n          <div class=\"determinate\" style=\"width: 93.75%\"></div>\r\n        </div>\r\n\r\n        <div class=\"input-field\">\r\n          <p>Personal Information</p>\r\n          <div class=\"group\">\r\n            <div class=\"input-field\">\r\n              <input id=\"first_name\" type=\"text\" class=\"validate\" formControlName=\"first_name\">\r\n              <label for=\"first_name\">First Name</label>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <input id=\"last_name\" type=\"text\" class=\"validate\" formControlName=\"last_name\">\r\n              <label for=\"last_name\">Last Name</label>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <input id=\"email\" type=\"email\" class=\"validate\" formControlName=\"email\">\r\n              <!-- <label for=\"email\">Email</label> -->\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <input id=\"mobiletel\" type=\"tel\" class=\"validate\" formControlName=\"mobiletel\" [textMask]=\"{mask: mask}\" >\r\n              <!-- <label for=\"mobiletel\">Mobile Number</label> -->\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <input id=\"landtel\" type=\"tel\" class=\"validate\" formControlName=\"landtel\" [textMask]=\"{mask: mask}\">\r\n              <!-- <label for=\"landtel\">Landline Number (optional)</label> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--row-->\r\n\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"col m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col m4\">\r\n        </div>\r\n        <div class=\"col m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q15.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  </footer>\r\n\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q15/q15.component.ts":
/*!**************************************************!*\
  !*** ./src/app/application/q15/q15.component.ts ***!
  \**************************************************/
/*! exports provided: Q15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q15Component", function() { return Q15Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q15Component = /** @class */ (function () {
    function Q15Component(zone, router, route, borrowerService) {
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q15Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        // this.URL = (window.location.href).includes('/application');
        // if (!this.URL) {
        //     this.router.navigate(['notfound'], { relativeTo: this.route });
        // }
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.Q15 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'mobiletel': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.CheckMobileNumber.bind(this)]),
            'landtel': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [this.CheckLandlineNumber.bind(this)])
        });
    };
    Q15Component.prototype.CheckMobileNumber = function (control) {
        this.mobiletel = control.value;
        this.mobiletelLength = this.mobiletel.replace(/[-_() ]/g, '').length;
        if (this.mobiletelLength != 10) {
            return { 'MobileValid': true };
        }
        else {
            return null;
        }
    };
    Q15Component.prototype.CheckLandlineNumber = function (control) {
        this.landtel = control.value;
        this.landtelLength = this.landtel.replace(/[-_() ]/g, '').length;
        if (this.landtelLength != 10 && this.landtelLength != 0) {
            return { 'LandlineValid': true };
        }
        else {
            return null;
        }
    };
    Q15Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'Address?', this.Q15.value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q16', { skipLocationChange: true });
    };
    Q15Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq14', { skipLocationChange: true });
    };
    Q15Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q15',
            template: __webpack_require__(/*! ./q15.component.html */ "./src/app/application/q15/q15.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q15Component);
    return Q15Component;
}());



/***/ }),

/***/ "./src/app/application/q16/q16.component.html":
/*!****************************************************!*\
  !*** ./src/app/application/q16/q16.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q16\" (ngSubmit)=\"Next()\">\r\n  <div class=\"divider\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"progress page-progress\">\r\n          <div class=\"determinate\" style=\"width: 100%\"></div>\r\n        </div>\r\n        <div class=\"input-field\">\r\n          <p>Personal Identification Number</p>\r\n          <div class=\"input-field\">\r\n            <input [(ngModel)]=\"idnumber\" id=\"idnumber\" type=\"text\" class=\"validate\" formControlName=\"idnumber\">\r\n            <label for=\"idnumber\">ID Number</label>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>  \r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col m6 offset-m3\">\r\n        <div class=\"col m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col m4\">\r\n        </div>\r\n        <div class=\"col m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q16.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  </footer>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q16/q16.component.ts":
/*!**************************************************!*\
  !*** ./src/app/application/q16/q16.component.ts ***!
  \**************************************************/
/*! exports provided: Q16Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q16Component", function() { return Q16Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q16Component = /** @class */ (function () {
    function Q16Component(zone, router, route, borrowerService) {
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q16Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        // this.URL = (window.location.href).includes('/application');
        // if (!this.URL) {
        //     this.router.navigate(['notfound'], { relativeTo: this.route });
        // }
        this.idnumber = '';
        this.Q16 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            //'idnumber': new FormControl('', [Validators.required, this.CheckSAIdNumber.bind(this)])
            'idnumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    Q16Component.prototype.CheckSAIdNumber = function (control) {
        this.saIdParser = this.require('south-african-id-parser');
        this.isIdNumberValid = this.saIdParser.validate(control.value);
        // console.log(this.saIdParser(control.value));
        if (!this.isIdNumberValid) {
            return { 'IdNumberValid': true };
        }
        else {
            return null;
        }
    };
    Q16Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'ID Number', this.Q16.value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/processing', { skipLocationChange: true });
    };
    Q16Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq15', { skipLocationChange: true });
    };
    Q16Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q16',
            template: __webpack_require__(/*! ./q16.component.html */ "./src/app/application/q16/q16.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q16Component);
    return Q16Component;
}());



/***/ }),

/***/ "./src/app/application/q2/q2.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q2/q2.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q2\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"divider\"></div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t\t<div class=\"determinate\" style=\"width: 12.5%\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"image-radio-buttons service-options\">\r\n\t\t\t\t\t<p>What type of automobile repair?</p>\r\n\t\t\t\t\t<div class=\"radio-group\">\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"vehicle-service\" class=\"input-hidden\" />\r\n\t\t\t\t\t\t<label for=\"vehicle-service\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 24 24\">\r\n\t\t\t\t\t\t\t\t<path d=\"M9.5,0A3,3 0 0,0 6.5,3A3,3 0 0,0 9.5,6C10.81,6 11.92,5.17 12.33,4H14.5V6H16.5V4H17.5V2H12.33C11.92,0.83 10.81,0 9.5,0M9.5,2A1,1 0 0,1 10.5,3A1,1 0 0,1 9.5,4A1,1 0 0,1 8.5,3A1,1 0 0,1 9.5,2M6.5,8C5.84,8 5.28,8.42 5.08,9L3,15V23A1,1 0 0,0 4,24H5A1,1 0 0,0 6,23V22H18V23A1,1 0 0,0 19,24H20A1,1 0 0,0 21,23V15L18.92,9C18.72,8.42 18.16,8 17.5,8H6.5M6.5,9.5H17.5L19,14H5L6.5,9.5M6.5,16A1.5,1.5 0 0,1 8,17.5A1.5,1.5 0 0,1 6.5,19A1.5,1.5 0 0,1 5,17.5A1.5,1.5 0 0,1 6.5,16M17.5,16A1.5,1.5 0 0,1 19,17.5A1.5,1.5 0 0,1 17.5,19A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 17.5,16Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t<br><strong>Vehicle Service</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"mechanical-repair\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"mechanical-repair\" />\r\n\t\t\t\t\t\t<label for=\"mechanical-repair\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 24 24\">\r\n\t\t\t\t\t\t\t\t<path d=\"M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t<br><strong>Mechanical Repairs</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"general-maintenance\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"general-maintenance\" />\r\n\t\t\t\t\t\t<label for=\"general-maintenance\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 24 24\">\r\n\t\t\t\t\t\t\t\t<path d=\"M4,3V6H1V20H23V6H20V3H14V6H10V3H4M3,8H21V18H3V8M15,10V12H13V14H15V16H17V14H19V12H17V10H15M5,12V14H11V12H5Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t<br><strong>General Maintenance (Brakes, Battery, etc.)</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"accidental-damage\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"accidental-damage\" />\r\n\t\t\t\t\t\t<label for=\"accidental-damage\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 24 24\">\r\n\t\t\t\t\t\t\t\t<path d=\"M15,10H20.39L17.06,6H15V10M17.5,18.5C17.89,18.5 18.24,18.37 18.54,18.07C18.84,17.77 19,17.42 19,17C19,16.61 18.84,16.26 18.54,15.96C18.24,15.66 17.89,15.5 17.5,15.5C17.08,15.5 16.73,15.66 16.43,15.96C16.13,16.26 16,16.61 16,17C16,17.42 16.13,17.77 16.43,18.07C16.73,18.37 17.08,18.5 17.5,18.5M6,18.5C6.44,18.5 6.8,18.37 7.08,18.07C7.36,17.77 7.5,17.42 7.5,17C7.5,16.61 7.36,16.26 7.08,15.96C6.8,15.66 6.44,15.5 6,15.5C5.56,15.5 5.2,15.66 4.92,15.96C4.64,16.26 4.5,16.61 4.5,17C4.5,17.42 4.64,17.77 4.92,18.07C5.2,18.37 5.56,18.5 6,18.5M18,4L23,10V17H20.5C20.5,17.83 20.19,18.53 19.59,19.13C19,19.72 18.3,20 17.5,20C16.67,20 15.97,19.72 15.38,19.13C14.78,18.53 14.5,17.83 14.5,17H9C9,17.83 8.7,18.53 8.11,19.13C7.5,19.72 6.81,20 6,20C5.19,20 4.5,19.72 3.89,19.13C3.3,18.53 3,17.83 3,17H1V13H9.19L3,8.11V11H1V5H2L13,11.06V4H18Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t<br><strong>Accidental Damage (Autobody)</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"aesthetic-maintenance\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"aesthetic-maintenance\" />\r\n\t\t\t\t\t\t<label for=\"aesthetic-maintenance\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 24 24\">\r\n\t\t\t\t\t\t\t\t<path d=\"M5,13L6.5,8.5H17.5L19,13M17.5,18A1.5,1.5 0 0,1 16,16.5A1.5,1.5 0 0,1 17.5,15A1.5,1.5 0 0,1 19,16.5A1.5,1.5 0 0,1 17.5,18M6.5,18A1.5,1.5 0 0,1 5,16.5A1.5,1.5 0 0,1 6.5,15A1.5,1.5 0 0,1 8,16.5A1.5,1.5 0 0,1 6.5,18M18.92,8C18.72,7.42 18.16,7 17.5,7H6.5C5.84,7 5.28,7.42 5.08,8L3,14V22A1,1 0 0,0 4,23H5A1,1 0 0,0 6,22V21H18V22A1,1 0 0,0 19,23H20A1,1 0 0,0 21,22V14M7,5A1.5,1.5 0 0,0 8.5,3.5C8.5,2.5 7,0.8 7,0.8C7,0.8 5.5,2.5 5.5,3.5A1.5,1.5 0 0,0 7,5M12,5A1.5,1.5 0 0,0 13.5,3.5C13.5,2.5 12,0.8 12,0.8C12,0.8 10.5,2.5 10.5,3.5A1.5,1.5 0 0,0 12,5M17,5A1.5,1.5 0 0,0 18.5,3.5C18.5,2.5 17,0.8 17,0.8C17,0.8 15.5,2.5 15.5,3.5A1.5,1.5 0 0,0 17,5Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t<br><strong>Aesthetic Maintenance (Polish, buff, general repair</strong>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q2.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q2/q2.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q2/q2.component.ts ***!
  \************************************************/
/*! exports provided: Q2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q2Component", function() { return Q2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q2Component = /** @class */ (function () {
    function Q2Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q2Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'sub-service': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q2Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'What type of automobile repair?', this.Q2.get('sub-service').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q3', { skipLocationChange: true });
    };
    Q2Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq1', { skipLocationChange: true });
    };
    Q2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q2',
            template: __webpack_require__(/*! ./q2.component.html */ "./src/app/application/q2/q2.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q2Component);
    return Q2Component;
}());



/***/ }),

/***/ "./src/app/application/q3/q3.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q3/q3.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t<div class=\"determinate\" style=\"width: 18.75%\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input-field\">\r\n\t\t\t\t<p>How much do you want to borrow?</p>\r\n\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t<input [(ngModel)]=\"borrowamount_slider\" type=\"range\" id=\"borrowamount_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t value=\"50000\" />\r\n\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t<p>R {{borrowamount_slider}}</p>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<footer class=\"container\">\r\n\t<div class=\"row pagination-btns\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>"

/***/ }),

/***/ "./src/app/application/q3/q3.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q3/q3.component.ts ***!
  \************************************************/
/*! exports provided: Q3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3Component", function() { return Q3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");






var Q3Component = /** @class */ (function () {
    function Q3Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q3Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.borrowamount_slider = '50000'; // Default range
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q3Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__["BorrowerApplicationLog"]('Questions', 'How much do you want to borrow?', this.borrowamount_slider, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q4', { skipLocationChange: true });
    };
    Q3Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq2', { skipLocationChange: true });
    };
    Q3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q3',
            template: __webpack_require__(/*! ./q3.component.html */ "./src/app/application/q3/q3.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__["BorrowerService"]])
    ], Q3Component);
    return Q3Component;
}());



/***/ }),

/***/ "./src/app/application/q4/q4.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q4/q4.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q4\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"divider\"></div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t\t<div class=\"determinate\" style=\"width: 25%\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p>Have you applied for or are you under formal debt review?</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"formal-debt-review\" type=\"radio\" class=\"with-gap\" formControlName=\"formal-debt-review\" value=\"yes\" />\r\n\t\t\t\t\t\t\t<span>Yes</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"formal-debt-review\" type=\"radio\" class=\"with-gap\" formControlName=\"formal-debt-review\" value=\"no\" />\r\n\t\t\t\t\t\t\t<span>No</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q4.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q4/q4.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q4/q4.component.ts ***!
  \************************************************/
/*! exports provided: Q4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q4Component", function() { return Q4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q4Component = /** @class */ (function () {
    function Q4Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q4Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'formal-debt-review': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q4Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Questions', 'Have you applied for or are you under formal debt review?', this.Q4.get('formal-debt-review').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q5', { skipLocationChange: true });
    };
    Q4Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq3', { skipLocationChange: true });
    };
    Q4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q4',
            template: __webpack_require__(/*! ./q4.component.html */ "./src/app/application/q4/q4.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q4Component);
    return Q4Component;
}());



/***/ }),

/***/ "./src/app/application/q5/q5.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q5/q5.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q5\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"divider\"></div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t\t<div class=\"determinate\" style=\"width: 31.25%\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p>Have you applied for or been declared insolvent?</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"insolvent\" type=\"radio\" class=\"with-gap\" formControlName=\"insolvent\" value=\"yes\" />\r\n\t\t\t\t\t\t\t<span>Yes</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"insolvent\" type=\"radio\" class=\"with-gap\" formControlName=\"insolvent\" value=\"no\" />\r\n\t\t\t\t\t\t\t<span>No</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q5.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q5/q5.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q5/q5.component.ts ***!
  \************************************************/
/*! exports provided: Q5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q5Component", function() { return Q5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q5Component = /** @class */ (function () {
    function Q5Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q5Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q5 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'insolvent': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q5Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Questions', 'Have you applied for or been declared insolvent?', this.Q5.get('insolvent').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q6', { skipLocationChange: true });
    };
    Q5Component.prototype.Back = function () {
        this.router.navigateByUrl('/q4', { skipLocationChange: true });
    };
    Q5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q5',
            template: __webpack_require__(/*! ./q5.component.html */ "./src/app/application/q5/q5.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q5Component);
    return Q5Component;
}());



/***/ }),

/***/ "./src/app/application/q6/q6.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q6/q6.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t<div class=\"determinate\" style=\"width: 37.5%\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input-field\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<label style=\"color:#000\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"credit_check\" id=\"credit_check\" />\r\n\t\t\t\t\t\t<span>I give permission for EasyMoolah to do a credit check.</span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n\t<div class=\"row pagination-btns\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>"

/***/ }),

/***/ "./src/app/application/q6/q6.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q6/q6.component.ts ***!
  \************************************************/
/*! exports provided: Q6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q6Component", function() { return Q6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");






var Q6Component = /** @class */ (function () {
    function Q6Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q6Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.credit_check = false;
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q6Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__["BorrowerApplicationLog"]('Questions', 'I give permission for EasyMoolah to do a credit check.', this.credit_check.valueOf.toString(), this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q7', { skipLocationChange: true });
    };
    Q6Component.prototype.Back = function () {
        this.router.navigateByUrl('/q5', { skipLocationChange: true });
    };
    Q6Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q6',
            template: __webpack_require__(/*! ./q6.component.html */ "./src/app/application/q6/q6.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__["BorrowerService"]])
    ], Q6Component);
    return Q6Component;
}());



/***/ }),

/***/ "./src/app/application/q7/q7.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q7/q7.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Q7\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"divider\"></div>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t\t<div class=\"determinate\" style=\"width: 43.75%\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p>What's your employment status?</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Unemployed\" />\r\n\t\t\t\t\t\t\t<span>Unemployed</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Permanently Employed\" />\r\n\t\t\t\t\t\t\t<span>Permanently Employed</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Contract Worker\" />\r\n\t\t\t\t\t\t\t<span>Contract Worker</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Self-employed\" />\r\n\t\t\t\t\t\t\t<span>Self-employed</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small\" [disabled]=\"!Q7.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/application/q7/q7.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q7/q7.component.ts ***!
  \************************************************/
/*! exports provided: Q7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q7Component", function() { return Q7Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");







var Q7Component = /** @class */ (function () {
    function Q7Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q7Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
        this.Q7 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'employment-status': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    Q7Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_6__["BorrowerApplicationLog"]('Question', 'What\'s your employment status?', this.Q7.get('employment-status').value, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q8', { skipLocationChange: true });
    };
    Q7Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq6', { skipLocationChange: true });
    };
    Q7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q7',
            template: __webpack_require__(/*! ./q7.component.html */ "./src/app/application/q7/q7.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_5__["BorrowerService"]])
    ], Q7Component);
    return Q7Component;
}());



/***/ }),

/***/ "./src/app/application/q8/q8.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q8/q8.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n\t<div class=\"row pagination-btns\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t<div class=\"determinate\" style=\"width: 50%\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input-field\">\r\n\t\t\t\t<p>What's your gross monthly income?</p>\r\n\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t<input [(ngModel)]=\"grossincome_slider\" type=\"range\" id=\"grossincome_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t value=\"50000\" />\r\n\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t<p>R {{grossincome_slider}}</p>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n\t<div class=\"row pagination-btns\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>"

/***/ }),

/***/ "./src/app/application/q8/q8.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q8/q8.component.ts ***!
  \************************************************/
/*! exports provided: Q8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q8Component", function() { return Q8Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");






var Q8Component = /** @class */ (function () {
    function Q8Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q8Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.grossincome_slider = '50000'; // Default range
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q8Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__["BorrowerApplicationLog"]('Questions', 'What\'s your gross monthly income?', this.grossincome_slider, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q9', { skipLocationChange: true });
    };
    Q8Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq7', { skipLocationChange: true });
    };
    Q8Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q8',
            template: __webpack_require__(/*! ./q8.component.html */ "./src/app/application/q8/q8.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__["BorrowerService"]])
    ], Q8Component);
    return Q8Component;
}());



/***/ }),

/***/ "./src/app/application/q9/q9.component.html":
/*!**************************************************!*\
  !*** ./src/app/application/q9/q9.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divider\"></div>\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"progress page-progress\">\r\n\t\t\t\t<div class=\"determinate\" style=\"width: 56.25%\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input-field\">\r\n\t\t\t\t<p>What's your nett monthly income?</p>\r\n\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t<input [(ngModel)]=\"nettincome_slider\" type=\"range\" id=\"nettincome_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t value=\"50000\" />\r\n\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t<p>R {{nettincome_slider}}</p>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n\t<div class=\"row pagination-btns\">\r\n\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>"

/***/ }),

/***/ "./src/app/application/q9/q9.component.ts":
/*!************************************************!*\
  !*** ./src/app/application/q9/q9.component.ts ***!
  \************************************************/
/*! exports provided: Q9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q9Component", function() { return Q9Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/router.animations */ "./src/app/common/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/borrower.service */ "./src/app/service/borrower.service.ts");
/* harmony import */ var src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/borrowerapplicationLog.model */ "./src/app/model/borrowerapplicationLog.model.ts");






var Q9Component = /** @class */ (function () {
    function Q9Component(router, route, borrowerService) {
        this.router = router;
        this.route = route;
        this.borrowerService = borrowerService;
        this.URL = false;
    }
    Q9Component.prototype.ngOnInit = function () {
        this.StartTime = new Date();
        this.nettincome_slider = '50000'; // Default range
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }
    };
    Q9Component.prototype.Next = function () {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new src_app_model_borrowerapplicationLog_model__WEBPACK_IMPORTED_MODULE_5__["BorrowerApplicationLog"]('Questions', 'What\'s your nett monthly income?', this.nettincome_slider, this.StartTime.toString(), (new Date).toString()));
        this.router.navigateByUrl('/q10', { skipLocationChange: true });
    };
    Q9Component.prototype.Back = function () {
        this.router.navigateByUrl('/bq8', { skipLocationChange: true });
    };
    Q9Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q9',
            template: __webpack_require__(/*! ./q9.component.html */ "./src/app/application/q9/q9.component.html"),
            animations: [_common_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_service_borrower_service__WEBPACK_IMPORTED_MODULE_4__["BorrowerService"]])
    ], Q9Component);
    return Q9Component;
}());



/***/ }),

/***/ "./src/app/common/googlemaps.service.ts":
/*!**********************************************!*\
  !*** ./src/app/common/googlemaps.service.ts ***!
  \**********************************************/
/*! exports provided: GoogleMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMaps", function() { return GoogleMaps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleMaps = /** @class */ (function () {
    function GoogleMaps(zone) {
        this.zone = zone;
    }
    GoogleMaps.prototype.getAddress = function (place) {
        var _this = this;
        this.address = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedAddress = place['formatted_address'];
        this.zone.run(function () { return _this.formattedAddress = place['formatted_address']; });
    };
    GoogleMaps.prototype.getEstablishmentAddress = function (place) {
        var _this = this;
        this.establishmentAddress = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedEstablishmentAddress = place['formatted_address'];
        this.zone.run(function () {
            _this.formattedEstablishmentAddress = place['formatted_address'];
            _this.phone = place['formatted_phone_number'];
        });
    };
    GoogleMaps.prototype.getAddrComponent = function (place, componentTemplate) {
        var result;
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    };
    GoogleMaps.prototype.getStreetNumber = function (place) {
        var COMPONENT_TEMPLATE = { street_number: 'short_name' }, streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    };
    GoogleMaps.prototype.getStreet = function (place) {
        var COMPONENT_TEMPLATE = { route: 'long_name' }, street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    };
    GoogleMaps.prototype.getCity = function (place) {
        var COMPONENT_TEMPLATE = { locality: 'long_name' }, city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    };
    GoogleMaps.prototype.getState = function (place) {
        var COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    };
    GoogleMaps.prototype.getDistrict = function (place) {
        var COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    };
    GoogleMaps.prototype.getCountryShort = function (place) {
        var COMPONENT_TEMPLATE = { country: 'short_name' }, countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    };
    GoogleMaps.prototype.getCountry = function (place) {
        var COMPONENT_TEMPLATE = { country: 'long_name' }, country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    };
    GoogleMaps.prototype.getPostCode = function (place) {
        var COMPONENT_TEMPLATE = { postal_code: 'long_name' }, postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    };
    GoogleMaps.prototype.getPhone = function (place) {
        var COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' }, phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    };
    GoogleMaps.prototype.test = function () {
        alert("test");
    };
    GoogleMaps = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], GoogleMaps);
    return GoogleMaps;
}());



/***/ }),

/***/ "./src/app/common/router.animations.ts":
/*!*********************************************!*\
  !*** ./src/app/common/router.animations.ts ***!
  \*********************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    // Next
    //   transition('* => q1', [
    //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
    //       , { optional: true }),
    //     group([
    //       query(':enter', [
    //         style({ transform: 'translateX(-100%)' }),
    //         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    //       ], { optional: true }),
    //       query(':leave', [
    //         style({ transform: 'translateX(0%)' }),
    //         animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
    //       ], { optional: true }),
    //     ])
    //   ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q2', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q3', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q4', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q5', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q6', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q7', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q8', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q9', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q10', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q11', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q12', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q13', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q14', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q15', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => q16', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    //   Back
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq1', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq2', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq3', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq4', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq5', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq6', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq7', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq8', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq9', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq10', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq11', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq12', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq13', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq14', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq15', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bq16', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  error works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/google-places.component.ts":
/*!********************************************!*\
  !*** ./src/app/google-places.component.ts ***!
  \********************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { } from '@types/googlemaps';
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent.prototype.ngAfterViewInit = function () {
        this.getPlaceAutocomplete();
    };
    AutocompleteComponent.prototype.getPlaceAutocomplete = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: 'ZA' },
            types: [this.adressType] // 'establishment' / 'address' / 'geocode'
        });
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    };
    AutocompleteComponent.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AutocompleteComponent.prototype, "adressType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteComponent.prototype, "setAddress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addresstext'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteComponent.prototype, "addresstext", void 0);
    AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'AutocompleteComponent',
            template: "\n      <input class=\"input\"\n        type=\"text\"\n        [(ngModel)]=\"autocompleteInput\"\n        #addresstext style=\"padding: 12px 20px; border: 1px solid #ccc; width: 400px\"\n        >\n    ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n<link rel=\"stylesheet\" href=\"../../assets/css/em_site_theme.css\" type=\"text/css\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\">\r\n</head>\r\n<header>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<a href=\"index.html\"><img class=\"responsive-img logo\" src=\"https://res.cloudinary.com/kemoso/image/upload/v1541622491/EasyMoolah/em_logo_final.svg\" alt=\"EasyMoolah\" width=\"340\" /></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m6 offset-m3\">\r\n\t\t\t\t<h5 class=\"center-align\">Borrower Application</h5>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/model/borrowerapplicationLog.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/model/borrowerapplicationLog.model.ts ***!
  \*******************************************************/
/*! exports provided: BorrowerApplicationLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowerApplicationLog", function() { return BorrowerApplicationLog; });
var BorrowerApplicationLog = /** @class */ (function () {
    function BorrowerApplicationLog(stage, question, answer, startTime, endTime) {
        this.Stage = stage;
        this.Question = question;
        this.Answer = answer;
        this.StartTime = startTime;
        this.EndTime = endTime;
    }
    return BorrowerApplicationLog;
}());



/***/ }),

/***/ "./src/app/model/financeresult.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/financeresult.model.ts ***!
  \**********************************************/
/*! exports provided: FinanceResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceResult", function() { return FinanceResult; });
var FinanceResult = /** @class */ (function () {
    function FinanceResult(approvedAmount, bank, imagePath, imageAlt) {
        this.ApprovedAmount = approvedAmount;
        this.Bank = bank;
        this.ImagePath = imagePath;
        this.ImageAlt = imageAlt;
    }
    return FinanceResult;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  You gone fucked up now.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service/borrower.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/borrower.service.ts ***!
  \*********************************************/
/*! exports provided: BorrowerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowerService", function() { return BorrowerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BorrowerService = /** @class */ (function () {
    function BorrowerService() {
        this.borrowerapplicationlog = [null];
    }
    BorrowerService.prototype.addBorrowerApplicationLog = function (borrowerapplicationlog) {
        this.borrowerapplicationlog.push(borrowerapplicationlog);
        // Test
        console.log(this.getBorrowerApplicationLog());
    };
    BorrowerService.prototype.getBorrowerApplicationLog = function () {
        return this.borrowerapplicationlog;
    };
    BorrowerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BorrowerService);
    return BorrowerService;
}());



/***/ }),

/***/ "./src/assets/css/em_site_theme.css":
/*!******************************************!*\
  !*** ./src/assets/css/em_site_theme.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==========================\r\nGeneral\r\n============================*/\r\nhtml, body {font-family: 'Montserrat', sans-serif;}\r\nh1 {font-size:28px; font-weight: 700}\r\nh2 {\r\n    font-size: 22px;\r\n    font-weight: 700\r\n}\r\nh3 {font-size:21px; font-weight: 700}\r\nh4 {font-size: 18px; font-weight: 700}\r\np {font-size:16px}\r\n.btn, .btn-small, .btn-large {background-color: #55c4d1;}\r\n.btn:hover, .btn-large:hover, .btn-small:hover {background-color:#0393a0}\r\n.progress {background-color:rgba(160,222,229,0.5)}\r\n.progress .determinate {background-color: #55c4d1}\r\n.center-align-btn {display: block; margin:0 auto}\r\n.page-progress {margin: 30px 0 50px}\r\ninput[type=text]:not(.browser-default):focus:not([readonly]) {border-bottom-color: #55c4d1}\r\ninput[type=range]+.thumb {display:none}\r\n.input-hidden {\r\n\tposition: absolute;\r\n\tleft: -9999px;\r\n}\r\n.service-options input[type=\"radio\"]:checked + label > svg {\r\n\tborder: 1px solid #fff;\r\n\tbox-shadow: 0 0 3px 3px #2a2e76;\r\n}\r\n/* Stuff after this is only to make things more pretty */\r\n.sub-service-buttons input[type=\"radio\"] + label {\r\n    display: block;\r\n    background-color: #eee;\r\n    vertical-align: middle;\r\n    margin-bottom: 5px;\r\n    height: 80px;\r\n    margin-right: 5px;\r\n    box-sizing: border-box;\r\n    max-width: 80%;\r\n}\r\n.sub-service-buttons input[type=\"radio\"]:checked + label {background-color:#2a2e76};\r\n.image-radio-buttons input[type=\"radio\"] + label {display:inline-block;text-align: center}\r\n.service-options input[type=\"radio\"] + label > svg {\r\n\tborder: 1px dashed #a0dee5;\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tmargin-right: 20px;\r\n\ttransition: 500ms all;\r\n}\r\n.service-options input[type=\"radio\"] + label > svg path {fill:#55c4d1}\r\n.service-options.image-radio-buttons input[type=\"radio\"] + label:hover > svg path {fill:#0393a0}\r\n.image-radio-buttons input[type=\"radio\"] + label:hover {cursor:pointer}\r\n.service-options input[type=\"radio\"] + label:last-child > svg {margin-right:0}\r\n.service-options input[type=\"radio\"]:checked + label > svg {\r\n\t-webkit-transform: scale(1.2);\r\n\t        transform: scale(1.2);\r\n}\r\n.service-options input[type=\"radio\"]:checked + label > svg path {fill:#2a2e76}\r\n.service-options input[type=\"radio\"]:checked + label {font-size:1.1em; color:#2a2e76; line-height: 1em}\r\n.service-options input[type=\"radio\"]:checked + label strong {margin-top: 20px; display: inline-block}\r\n.bank-options input[type=\"radio\"] + label > span {width: 110px; height:110px; display:block; background-image: url('bank-logos-sprite-sheet.png'); opacity: 0.5;}\r\n.bank-options input[type=\"radio\"] + label:hover > span, .bank-options input[type=\"radio\"]:checked + label > span {opacity:1}\r\n.absa-logo {background-position:-140px -10px}\r\n.bank-options input[type=\"radio\"] + label:hover .absa-logo, .bank-options input[type=\"radio\"]:checked + label .absa-logo {background-position:-10px -10px}\r\n.capitec-logo {background-position:-140px -140px}\r\n.bank-options input[type=\"radio\"] + label:hover .capitec-logo, .bank-options input[type=\"radio\"]:checked + label .capitec-logo {background-position:-10px -140px}\r\n.fnb-logo {background-position:-270px -140px}\r\n.bank-options input[type=\"radio\"] + label:hover .fnb-logo, .bank-options input[type=\"radio\"]:checked + label .fnb-logo {background-position:-270px -10px}\r\n.nedbank-logo {background-position:-140px -270px}\r\n.bank-options input[type=\"radio\"] + label:hover .nedbank-logo, .bank-options input[type=\"radio\"]:checked + label .nedbank-logo {background-position:-10px -270px}\r\n.sb-logo {background-position:-400px -10px}\r\n.bank-options input[type=\"radio\"] + label:hover .sb-logo, .bank-options input[type=\"radio\"]:checked + label .sb-logo {background-position:-270px -270px}\r\n/*==========================\r\nHeader\r\n============================*/\r\nheader {margin-bottom: 30px}\r\n.logo {display: block; margin: 0 auto}\r\n/*==========================\r\nBody/Content\r\n============================*/\r\n.pagination-btns .material-icons.left {margin-right:5px}\r\n.pagination-btns .btn-small .material-icons.right {margin-left:5px}\r\n.amount_output {\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    text-align: center;\t\r\n}\r\n/*==========================\r\nFooter\r\n============================*/\r\n.footer_menu_bottom a {color:#55c4d1}\r\n.footer_menu_bottom a:hover {color:#2e9eab; text-decoration: underline}\r\nul.footer_menu_bottom {\r\n\tdisplay:block; width:160px; margin:150px auto 0;\r\n\t-webkit-margin-before: 0;\r\n\t        margin-block-start: 0;\r\n    -webkit-margin-after: 0;\r\n            margin-block-end: 0;\r\n    -webkit-margin-start: 50%;\r\n            margin-inline-start: 50%;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    -webkit-padding-start: 0;\r\n            padding-inline-start: 0;\r\n}\r\n.footer_menu_bottom li {float:left}\r\n.footer_menu_bottom li::after {content:'|'; padding: 0 10px; display:inline-block}\r\n.footer_menu_bottom li:last-child::after {content: ''; padding: 0}\r\n/*==========================\r\nMedia Queries\r\n============================*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2VtX3NpdGVfdGhlbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs4QkFFOEI7QUFDOUIsWUFBWSxzQ0FBc0MsQ0FBQztBQUNuRCxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNyQztJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7QUFDRCxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNyQyxJQUFJLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0FBQ3RDLEdBQUcsY0FBYyxDQUFDO0FBQ2xCLDhCQUE4QiwwQkFBMEIsQ0FBQztBQUN6RCxnREFBZ0Qsd0JBQXdCLENBQUM7QUFDekUsV0FBVyxzQ0FBc0MsQ0FBQztBQUNsRCx3QkFBd0IseUJBQXlCLENBQUM7QUFDbEQsbUJBQW1CLGVBQWUsQ0FBQyxhQUFhLENBQUM7QUFDakQsZ0JBQWdCLG1CQUFtQixDQUFDO0FBQ3BDLDhEQUE4RCw0QkFBNEIsQ0FBQztBQUMzRiwwQkFBMEIsWUFBWSxDQUFDO0FBQ3ZDO0NBQ0MsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZDtBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGdDQUFnQztDQUNoQztBQUVELHlEQUF5RDtBQUN6RDtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBR2xCLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCO0FBQ0QsMERBQTBELHdCQUF3QixDQUFDLENBQUE7QUFDbkYsa0RBQWtELHFCQUFxQixrQkFBa0IsQ0FBQztBQUMxRjtDQUNDLDJCQUEyQjtDQUMzQixZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEI7QUFDRCx5REFBeUQsWUFBWSxDQUFDO0FBQ3RFLG1GQUFtRixZQUFZLENBQUM7QUFDaEcsd0RBQXdELGNBQWMsQ0FBQztBQUN2RSwrREFBK0QsY0FBYyxDQUFDO0FBQzlFO0NBQ0MsOEJBQXNCO1NBQXRCLHNCQUFzQjtDQUN0QjtBQUNELGlFQUFpRSxZQUFZLENBQUM7QUFDOUUsc0RBQXNELGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN2Ryw2REFBNkQsaUJBQWlCLENBQUMscUJBQXFCLENBQUM7QUFDckcsa0RBQWtELGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLHFEQUErRCxDQUFDLGFBQWEsQ0FBQztBQUMzSyxrSEFBa0gsU0FBUyxDQUFDO0FBQzVILFlBQVksZ0NBQWdDLENBQUM7QUFDN0MsMEhBQTBILCtCQUErQixDQUFDO0FBQzFKLGVBQWUsaUNBQWlDLENBQUM7QUFDakQsZ0lBQWdJLGdDQUFnQyxDQUFDO0FBQ2pLLFdBQVcsaUNBQWlDLENBQUM7QUFDN0Msd0hBQXdILGdDQUFnQyxDQUFDO0FBQ3pKLGVBQWUsaUNBQWlDLENBQUM7QUFDakQsZ0lBQWdJLGdDQUFnQyxDQUFDO0FBQ2pLLFVBQVUsZ0NBQWdDLENBQUM7QUFDM0Msc0hBQXNILGlDQUFpQyxDQUFDO0FBQ3hKOzs4QkFFOEI7QUFDOUIsUUFBUSxtQkFBbUIsQ0FBQztBQUM1QixPQUFPLGVBQWUsQ0FBQyxjQUFjLENBQUM7QUFFdEM7OzhCQUU4QjtBQUM5Qix1Q0FBdUMsZ0JBQWdCLENBQUM7QUFDeEQsbURBQW1ELGVBQWUsQ0FBQztBQUNuRTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFFRDs7OEJBRThCO0FBQzlCLHVCQUF1QixhQUFhLENBQUM7QUFDckMsNkJBQTZCLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQztBQUN2RTtDQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CO0NBQ2hELHlCQUFzQjtTQUF0QixzQkFBc0I7SUFDbkIsd0JBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQiwwQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQXdCO1lBQXhCLHdCQUF3QjtDQUMzQjtBQUNELHdCQUF3QixVQUFVLENBQUM7QUFDbkMsK0JBQStCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztBQUNsRiwwQ0FBMEMsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUVsRTs7OEJBRThCIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL2VtX3NpdGVfdGhlbWUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5HZW5lcmFsXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5odG1sLCBib2R5IHtmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cclxuaDEge2ZvbnQtc2l6ZToyOHB4OyBmb250LXdlaWdodDogNzAwfVxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbn1cclxuaDMge2ZvbnQtc2l6ZToyMXB4OyBmb250LXdlaWdodDogNzAwfVxyXG5oNCB7Zm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNzAwfVxyXG5wIHtmb250LXNpemU6MTZweH1cclxuLmJ0biwgLmJ0bi1zbWFsbCwgLmJ0bi1sYXJnZSB7YmFja2dyb3VuZC1jb2xvcjogIzU1YzRkMTt9XHJcbi5idG46aG92ZXIsIC5idG4tbGFyZ2U6aG92ZXIsIC5idG4tc21hbGw6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IzAzOTNhMH1cclxuLnByb2dyZXNzIHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYwLDIyMiwyMjksMC41KX1cclxuLnByb2dyZXNzIC5kZXRlcm1pbmF0ZSB7YmFja2dyb3VuZC1jb2xvcjogIzU1YzRkMX1cclxuLmNlbnRlci1hbGlnbi1idG4ge2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW46MCBhdXRvfVxyXG4ucGFnZS1wcm9ncmVzcyB7bWFyZ2luOiAzMHB4IDAgNTBweH1cclxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pIHtib3JkZXItYm90dG9tLWNvbG9yOiAjNTVjNGQxfVxyXG5pbnB1dFt0eXBlPXJhbmdlXSsudGh1bWIge2Rpc3BsYXk6bm9uZX1cclxuLmlucHV0LWhpZGRlbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IC05OTk5cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCA+IHN2ZyB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgM3B4IDNweCAjMmEyZTc2O1xyXG59XHJcblxyXG4vKiBTdHVmZiBhZnRlciB0aGlzIGlzIG9ubHkgdG8gbWFrZSB0aGluZ3MgbW9yZSBwcmV0dHkgKi9cclxuLnN1Yi1zZXJ2aWNlLWJ1dHRvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG59XHJcbi5zdWItc2VydmljZS1idXR0b25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge2JhY2tncm91bmQtY29sb3I6IzJhMmU3Nn07XHJcbi5pbWFnZS1yYWRpby1idXR0b25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOiBjZW50ZXJ9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgPiBzdmcge1xyXG5cdGJvcmRlcjogMXB4IGRhc2hlZCAjYTBkZWU1O1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGhlaWdodDogODBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0dHJhbnNpdGlvbjogNTAwbXMgYWxsO1xyXG59XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgPiBzdmcgcGF0aCB7ZmlsbDojNTVjNGQxfVxyXG4uc2VydmljZS1vcHRpb25zLmltYWdlLXJhZGlvLWJ1dHRvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIgPiBzdmcgcGF0aCB7ZmlsbDojMDM5M2EwfVxyXG4uaW1hZ2UtcmFkaW8tYnV0dG9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlciB7Y3Vyc29yOnBvaW50ZXJ9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6bGFzdC1jaGlsZCA+IHN2ZyB7bWFyZ2luLXJpZ2h0OjB9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCA+IHN2ZyB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCA+IHN2ZyBwYXRoIHtmaWxsOiMyYTJlNzZ9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7Zm9udC1zaXplOjEuMWVtOyBjb2xvcjojMmEyZTc2OyBsaW5lLWhlaWdodDogMWVtfVxyXG4uc2VydmljZS1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgc3Ryb25nIHttYXJnaW4tdG9wOiAyMHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2t9XHJcbi5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgPiBzcGFuIHt3aWR0aDogMTEwcHg7IGhlaWdodDoxMTBweDsgZGlzcGxheTpibG9jazsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmFuay1sb2dvcy1zcHJpdGUtc2hlZXQucG5nJyk7IG9wYWNpdHk6IDAuNTt9XHJcbi5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIgPiBzcGFuLCAuYmFuay1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgPiBzcGFuIHtvcGFjaXR5OjF9XHJcbi5hYnNhLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTE0MHB4IC0xMHB4fVxyXG4uYmFuay1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmhvdmVyIC5hYnNhLWxvZ28sIC5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCAuYWJzYS1sb2dvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xMHB4IC0xMHB4fVxyXG4uY2FwaXRlYy1sb2dvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNDBweCAtMTQwcHh9XHJcbi5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIgLmNhcGl0ZWMtbG9nbywgLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIC5jYXBpdGVjLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTEwcHggLTE0MHB4fVxyXG4uZm5iLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTI3MHB4IC0xNDBweH1cclxuLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlciAuZm5iLWxvZ28sIC5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCAuZm5iLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTI3MHB4IC0xMHB4fVxyXG4ubmVkYmFuay1sb2dvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNDBweCAtMjcwcHh9XHJcbi5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIgLm5lZGJhbmstbG9nbywgLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIC5uZWRiYW5rLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTEwcHggLTI3MHB4fVxyXG4uc2ItbG9nbyB7YmFja2dyb3VuZC1wb3NpdGlvbjotNDAwcHggLTEwcHh9XHJcbi5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIgLnNiLWxvZ28sIC5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCAuc2ItbG9nbyB7YmFja2dyb3VuZC1wb3NpdGlvbjotMjcwcHggLTI3MHB4fVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkhlYWRlclxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuaGVhZGVyIHttYXJnaW4tYm90dG9tOiAzMHB4fVxyXG4ubG9nbyB7ZGlzcGxheTogYmxvY2s7IG1hcmdpbjogMCBhdXRvfVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5Cb2R5L0NvbnRlbnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5wYWdpbmF0aW9uLWJ0bnMgLm1hdGVyaWFsLWljb25zLmxlZnQge21hcmdpbi1yaWdodDo1cHh9XHJcbi5wYWdpbmF0aW9uLWJ0bnMgLmJ0bi1zbWFsbCAubWF0ZXJpYWwtaWNvbnMucmlnaHQge21hcmdpbi1sZWZ0OjVweH1cclxuLmFtb3VudF9vdXRwdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHRcclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5Gb290ZXJcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5mb290ZXJfbWVudV9ib3R0b20gYSB7Y29sb3I6IzU1YzRkMX1cclxuLmZvb3Rlcl9tZW51X2JvdHRvbSBhOmhvdmVyIHtjb2xvcjojMmU5ZWFiOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZX1cclxudWwuZm9vdGVyX21lbnVfYm90dG9tIHtcclxuXHRkaXNwbGF5OmJsb2NrOyB3aWR0aDoxNjBweDsgbWFyZ2luOjE1MHB4IGF1dG8gMDtcclxuXHRtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNTAlO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG59XHJcbi5mb290ZXJfbWVudV9ib3R0b20gbGkge2Zsb2F0OmxlZnR9XHJcbi5mb290ZXJfbWVudV9ib3R0b20gbGk6OmFmdGVyIHtjb250ZW50Oid8JzsgcGFkZGluZzogMCAxMHB4OyBkaXNwbGF5OmlubGluZS1ibG9ja31cclxuLmZvb3Rlcl9tZW51X2JvdHRvbSBsaTpsYXN0LWNoaWxkOjphZnRlciB7Y29udGVudDogJyc7IHBhZGRpbmc6IDB9XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbk1lZGlhIFF1ZXJpZXNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\GIT\EasyMoolah2019\Development\EasyMoolah-Borrower\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map