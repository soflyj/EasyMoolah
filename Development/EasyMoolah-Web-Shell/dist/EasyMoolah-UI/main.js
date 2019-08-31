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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/not-found/not-found.component */ "./src/app/views/not-found/not-found.component.ts");
/* harmony import */ var _views_landing_screen_landing_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/landing-screen/landing-screen.component */ "./src/app/views/landing-screen/landing-screen.component.ts");
/* harmony import */ var _views_data_points_step1_step1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/data-points/step1/step1.component */ "./src/app/views/data-points/step1/step1.component.ts");
/* harmony import */ var _views_data_points_step2_step2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/data-points/step2/step2.component */ "./src/app/views/data-points/step2/step2.component.ts");
/* harmony import */ var _views_data_points_step3_step3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/data-points/step3/step3.component */ "./src/app/views/data-points/step3/step3.component.ts");
/* harmony import */ var _views_data_points_step4_step4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/data-points/step4/step4.component */ "./src/app/views/data-points/step4/step4.component.ts");
/* harmony import */ var _views_data_points_step5_step5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/data-points/step5/step5.component */ "./src/app/views/data-points/step5/step5.component.ts");
/* harmony import */ var _views_data_points_step6_step6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/data-points/step6/step6.component */ "./src/app/views/data-points/step6/step6.component.ts");
/* harmony import */ var _views_data_points_step7_step7_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/data-points/step7/step7.component */ "./src/app/views/data-points/step7/step7.component.ts");
/* harmony import */ var _views_data_points_step8_step8_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/data-points/step8/step8.component */ "./src/app/views/data-points/step8/step8.component.ts");
/* harmony import */ var _views_data_points_step9_step9_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/data-points/step9/step9.component */ "./src/app/views/data-points/step9/step9.component.ts");
/* harmony import */ var _views_data_points_step10_step10_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/data-points/step10/step10.component */ "./src/app/views/data-points/step10/step10.component.ts");
/* harmony import */ var _views_data_points_step11_step11_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/data-points/step11/step11.component */ "./src/app/views/data-points/step11/step11.component.ts");
/* harmony import */ var _views_data_points_step12_step12_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/data-points/step12/step12.component */ "./src/app/views/data-points/step12/step12.component.ts");
/* harmony import */ var _views_data_points_step13_step13_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/data-points/step13/step13.component */ "./src/app/views/data-points/step13/step13.component.ts");
/* harmony import */ var _views_data_points_step14_step14_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/data-points/step14/step14.component */ "./src/app/views/data-points/step14/step14.component.ts");
/* harmony import */ var _views_data_points_step15_step15_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/data-points/step15/step15.component */ "./src/app/views/data-points/step15/step15.component.ts");
/* harmony import */ var _views_data_points_step16_step16_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/data-points/step16/step16.component */ "./src/app/views/data-points/step16/step16.component.ts");





















const appRoutes = [
    { path: '', component: _views_landing_screen_landing_screen_component__WEBPACK_IMPORTED_MODULE_4__["LandingScreenComponent"], pathMatch: 'full' },
    //Forward
    { path: 'step-1/:jar', component: _views_data_points_step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"], data: { state: 'step-1' } },
    { path: 'step-2/:jar', component: _views_data_points_step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"], data: { state: 'step-2' } },
    { path: 'step-3/:jar', component: _views_data_points_step3_step3_component__WEBPACK_IMPORTED_MODULE_7__["Step3Component"], data: { state: 'step-3' } },
    { path: 'step-4/:jar', component: _views_data_points_step4_step4_component__WEBPACK_IMPORTED_MODULE_8__["Step4Component"], data: { state: 'step-4' } },
    { path: 'step-5/:jar', component: _views_data_points_step5_step5_component__WEBPACK_IMPORTED_MODULE_9__["Step5Component"], data: { state: 'step-5' } },
    { path: 'step-6/:jar', component: _views_data_points_step6_step6_component__WEBPACK_IMPORTED_MODULE_10__["Step6Component"], data: { state: 'step-6' } },
    { path: 'step-7/:jar', component: _views_data_points_step7_step7_component__WEBPACK_IMPORTED_MODULE_11__["Step7Component"], data: { state: 'step-7' } },
    { path: 'step-8/:jar', component: _views_data_points_step8_step8_component__WEBPACK_IMPORTED_MODULE_12__["Step8Component"], data: { state: 'step-8' } },
    { path: 'step-9/:jar', component: _views_data_points_step9_step9_component__WEBPACK_IMPORTED_MODULE_13__["Step9Component"], data: { state: 'step-9' } },
    { path: 'step-10/:jar', component: _views_data_points_step10_step10_component__WEBPACK_IMPORTED_MODULE_14__["Step10Component"], data: { state: 'step-10' } },
    { path: 'step-11/:jar', component: _views_data_points_step11_step11_component__WEBPACK_IMPORTED_MODULE_15__["Step11Component"], data: { state: 'step-11' } },
    { path: 'step-12/:jar', component: _views_data_points_step12_step12_component__WEBPACK_IMPORTED_MODULE_16__["Step12Component"], data: { state: 'step-12' } },
    { path: 'step-13/:jar', component: _views_data_points_step13_step13_component__WEBPACK_IMPORTED_MODULE_17__["Step13Component"], data: { state: 'step-13' } },
    { path: 'step-14/:jar', component: _views_data_points_step14_step14_component__WEBPACK_IMPORTED_MODULE_18__["Step14Component"], data: { state: 'step-14' } },
    { path: 'step-15/:jar', component: _views_data_points_step15_step15_component__WEBPACK_IMPORTED_MODULE_19__["Step15Component"], data: { state: 'step-15' } },
    { path: 'step-16/:jar', component: _views_data_points_step16_step16_component__WEBPACK_IMPORTED_MODULE_20__["Step16Component"], data: { state: 'step-16' } },
    //Back
    { path: 'stepped-1/:jar', component: _views_data_points_step1_step1_component__WEBPACK_IMPORTED_MODULE_5__["Step1Component"], data: { state: 'stepped-1' } },
    { path: 'stepped-2/:jar', component: _views_data_points_step2_step2_component__WEBPACK_IMPORTED_MODULE_6__["Step2Component"], data: { state: 'stepped-2' } },
    { path: 'stepped-3/:jar', component: _views_data_points_step3_step3_component__WEBPACK_IMPORTED_MODULE_7__["Step3Component"], data: { state: 'stepped-3' } },
    { path: 'stepped-4/:jar', component: _views_data_points_step4_step4_component__WEBPACK_IMPORTED_MODULE_8__["Step4Component"], data: { state: 'stepped-4' } },
    { path: 'stepped-5/:jar', component: _views_data_points_step5_step5_component__WEBPACK_IMPORTED_MODULE_9__["Step5Component"], data: { state: 'stepped-5' } },
    { path: 'stepped-6/:jar', component: _views_data_points_step6_step6_component__WEBPACK_IMPORTED_MODULE_10__["Step6Component"], data: { state: 'stepped-6' } },
    { path: 'stepped-7/:jar', component: _views_data_points_step7_step7_component__WEBPACK_IMPORTED_MODULE_11__["Step7Component"], data: { state: 'stepped-7' } },
    { path: 'stepped-8/:jar', component: _views_data_points_step8_step8_component__WEBPACK_IMPORTED_MODULE_12__["Step8Component"], data: { state: 'stepped-8' } },
    { path: 'stepped-9/:jar', component: _views_data_points_step9_step9_component__WEBPACK_IMPORTED_MODULE_13__["Step9Component"], data: { state: 'stepped-9' } },
    { path: 'stepped-10/:jar', component: _views_data_points_step10_step10_component__WEBPACK_IMPORTED_MODULE_14__["Step10Component"], data: { state: 'stepped-10' } },
    { path: 'stepped-11/:jar', component: _views_data_points_step11_step11_component__WEBPACK_IMPORTED_MODULE_15__["Step11Component"], data: { state: 'stepped-11' } },
    { path: 'stepped-12/:jar', component: _views_data_points_step12_step12_component__WEBPACK_IMPORTED_MODULE_16__["Step12Component"], data: { state: 'stepped-12' } },
    { path: 'stepped-13/:jar', component: _views_data_points_step13_step13_component__WEBPACK_IMPORTED_MODULE_17__["Step13Component"], data: { state: 'stepped-13' } },
    { path: 'stepped-14/:jar', component: _views_data_points_step14_step14_component__WEBPACK_IMPORTED_MODULE_18__["Step14Component"], data: { state: 'stepped-14' } },
    { path: 'stepped-15/:jar', component: _views_data_points_step15_step15_component__WEBPACK_IMPORTED_MODULE_19__["Step15Component"], data: { state: 'stepped-15' } },
    { path: 'stepped-16/:jar', component: _views_data_points_step16_step16_component__WEBPACK_IMPORTED_MODULE_20__["Step16Component"], data: { state: 'stepped-16' } },
    { path: '**', component: _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
    { path: 'not-found', component: _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"col-md-8\"></div>\r\n<div class=\"col-md-4\">\r\n  <div [@routerTransition]=\"getState(o)\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'EasyMoolah-UI';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // (<any>window).ga('set', 'page', event.urlAfterRedirects);
                // (<any>window).ga('send', 'pageview');
            }
        });
    }
    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _views_common_google_places_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/common/google-places.component */ "./src/app/views/common/google-places.component.ts");
/* harmony import */ var _services_googlemaps_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/googlemaps.service */ "./src/app/services/googlemaps.service.ts");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var _services_data_point_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/not-found/not-found.component */ "./src/app/views/not-found/not-found.component.ts");
/* harmony import */ var _views_landing_screen_landing_screen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/landing-screen/landing-screen.component */ "./src/app/views/landing-screen/landing-screen.component.ts");
/* harmony import */ var _views_data_points_step1_step1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/data-points/step1/step1.component */ "./src/app/views/data-points/step1/step1.component.ts");
/* harmony import */ var _views_data_points_step2_step2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/data-points/step2/step2.component */ "./src/app/views/data-points/step2/step2.component.ts");
/* harmony import */ var _views_data_points_step3_step3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/data-points/step3/step3.component */ "./src/app/views/data-points/step3/step3.component.ts");
/* harmony import */ var _views_data_points_step4_step4_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/data-points/step4/step4.component */ "./src/app/views/data-points/step4/step4.component.ts");
/* harmony import */ var _views_data_points_step5_step5_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/data-points/step5/step5.component */ "./src/app/views/data-points/step5/step5.component.ts");
/* harmony import */ var _views_data_points_step6_step6_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/data-points/step6/step6.component */ "./src/app/views/data-points/step6/step6.component.ts");
/* harmony import */ var _views_data_points_step7_step7_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/data-points/step7/step7.component */ "./src/app/views/data-points/step7/step7.component.ts");
/* harmony import */ var _views_data_points_step8_step8_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/data-points/step8/step8.component */ "./src/app/views/data-points/step8/step8.component.ts");
/* harmony import */ var _views_data_points_step9_step9_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/data-points/step9/step9.component */ "./src/app/views/data-points/step9/step9.component.ts");
/* harmony import */ var _views_data_points_step10_step10_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/data-points/step10/step10.component */ "./src/app/views/data-points/step10/step10.component.ts");
/* harmony import */ var _views_data_points_step11_step11_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/data-points/step11/step11.component */ "./src/app/views/data-points/step11/step11.component.ts");
/* harmony import */ var _views_data_points_step12_step12_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/data-points/step12/step12.component */ "./src/app/views/data-points/step12/step12.component.ts");
/* harmony import */ var _views_data_points_step13_step13_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/data-points/step13/step13.component */ "./src/app/views/data-points/step13/step13.component.ts");
/* harmony import */ var _views_data_points_step14_step14_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/data-points/step14/step14.component */ "./src/app/views/data-points/step14/step14.component.ts");
/* harmony import */ var _views_data_points_step15_step15_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/data-points/step15/step15.component */ "./src/app/views/data-points/step15/step15.component.ts");
/* harmony import */ var _views_data_points_step16_step16_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/data-points/step16/step16.component */ "./src/app/views/data-points/step16/step16.component.ts");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");


































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
            _views_landing_screen_landing_screen_component__WEBPACK_IMPORTED_MODULE_16__["LandingScreenComponent"],
            _views_data_points_step1_step1_component__WEBPACK_IMPORTED_MODULE_17__["Step1Component"],
            _views_data_points_step2_step2_component__WEBPACK_IMPORTED_MODULE_18__["Step2Component"],
            _views_data_points_step3_step3_component__WEBPACK_IMPORTED_MODULE_19__["Step3Component"],
            _views_data_points_step4_step4_component__WEBPACK_IMPORTED_MODULE_20__["Step4Component"],
            _views_data_points_step5_step5_component__WEBPACK_IMPORTED_MODULE_21__["Step5Component"],
            _views_data_points_step6_step6_component__WEBPACK_IMPORTED_MODULE_22__["Step6Component"],
            _views_data_points_step7_step7_component__WEBPACK_IMPORTED_MODULE_23__["Step7Component"],
            _views_data_points_step8_step8_component__WEBPACK_IMPORTED_MODULE_24__["Step8Component"],
            _views_data_points_step9_step9_component__WEBPACK_IMPORTED_MODULE_25__["Step9Component"],
            _views_data_points_step10_step10_component__WEBPACK_IMPORTED_MODULE_26__["Step10Component"],
            _views_data_points_step11_step11_component__WEBPACK_IMPORTED_MODULE_27__["Step11Component"],
            _views_data_points_step12_step12_component__WEBPACK_IMPORTED_MODULE_28__["Step12Component"],
            _views_data_points_step13_step13_component__WEBPACK_IMPORTED_MODULE_29__["Step13Component"],
            _views_data_points_step14_step14_component__WEBPACK_IMPORTED_MODULE_30__["Step14Component"],
            _views_data_points_step15_step15_component__WEBPACK_IMPORTED_MODULE_31__["Step15Component"],
            _views_data_points_step16_step16_component__WEBPACK_IMPORTED_MODULE_32__["Step16Component"],
            _views_header_header_component__WEBPACK_IMPORTED_MODULE_33__["HeaderComponent"],
            _views_common_google_places_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__["TextMaskModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            //   HttpModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_header_service__WEBPACK_IMPORTED_MODULE_11__["HeaderService"],
            _services_data_point_service__WEBPACK_IMPORTED_MODULE_12__["DataPointService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"],
            _services_googlemaps_service__WEBPACK_IMPORTED_MODULE_10__["GoogleMaps"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/application.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/application.model.ts ***!
  \*********************************************/
/*! exports provided: ApplicationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationModel", function() { return ApplicationModel; });
class ApplicationModel {
}


/***/ }),

/***/ "./src/app/models/data-point.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/data-point.model.ts ***!
  \********************************************/
/*! exports provided: DataPointModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPointModel", function() { return DataPointModel; });
class DataPointModel {
}


/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// /** @description Common functions for angular services. */
// @Injectable({
//   providedIn: 'root'
// })
class CommonService {
    GetGUID() {
        this.application = JSON.parse(window.localStorage.getItem('application'));
        return this.application.guid;
    }
    SetApplication(application) {
        this.application = application;
        this.guid = application.guid;
        window.localStorage.setItem('application', JSON.stringify(application));
    }
}
//   private baseUrl = '';
//   constructor(
//     private http: HttpClient) {
//     const configEnv = environment.appUrl;
//     if (configEnv === '') {
//       this.baseUrl = window.location.protocol + '//' + window.location.host;
//     } else {
//       this.baseUrl = `${environment.appUrl}`;
//     }
//   }
//   // /**
//   //  * @description Combines the controller name to set the api url to user.
//   //  * @param string controller The name of the controller.
//   //  */
//   getApiUrl(controller: string): string {
//     return `${this.baseUrl}/api/${controller}`;
//   }
//   /** @description Adds the default request headers that is needed when making an api call. */
//   getApiRequestOptions(): object {
//     const token = '';
//     if (token != null) {
//       const accessToken = token;
//       if (accessToken) {
//         return {
//           headers: new HttpHeaders(
//             {
//               'Content-Type': 'application/json; charset=utf-8',
//               Authorization: 'Bearer ' + accessToken
//             }
//           )
//         };
//       }
//     } else {
//       return {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json; charset=utf-8'
//         })
//       };
//     }
//   }
//   getTokenRequest(): object {
//     const token = '';
//     if (token != null) {
//       const accessToken = token;
//       if (accessToken) {
//         return {
//           headers: new HttpHeaders(
//             {
//               'Content-Type': 'application/json; charset=utf-8',
//               Authorization: 'Bearer ' + accessToken
//             }
//           )
//         };
//       }
//     } else {
//       return {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json; charset=utf-8'
//         })
//       };
//     }
//   }
//   getToken<T>(item: T): Observable<number[]> {
//     const apiUrl = `${this.baseUrl}/login`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<number[]>(apiUrl, JSON.stringify(item), headers);
//   }
//   get<T>(id: any, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}/${id}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.get<T>(apiUrl, headers);
//   }
//   getAll<T>(apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.get<T>(apiUrl, headers);
//   }
//   addToReturnNumberArray<T>(item: T, apiUrl: string): Observable<number[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<number[]>(apiUrl, JSON.stringify(item), headers);
//   }
//   addToReturnString<T>(item: T, apiUrl: string): Observable<string> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<string>(apiUrl, JSON.stringify(item), headers);
//   }
//   addReturnsValidationResult<T>(item: T, apiUrl: string): Observable<ValidationResultModel> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<ValidationResultModel>(apiUrl, JSON.stringify(item), headers);
//   }
//   add<T, TK = number>(item: T, apiUrl: string): Observable<TK> {
//     return this.post(apiUrl, item);
//   }
//   post<T, TK = number>(apiUrl: string, item: T): Observable<TK> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<TK>(apiUrl, JSON.stringify(item), headers);
//   }
//   postWithNoData<T>(apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<T>(apiUrl, null, headers);
//   }
//   addFormData<T>(item: FormData, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<T>(apiUrl, JSON.stringify(item), headers);
//   }
//   addReturnsModel<T>(item: T, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<T>(apiUrl, JSON.stringify(item), headers);
//   }
//   addReturnsBoolean<T>(item: T, apiUrl: string): Observable<boolean> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<boolean>(apiUrl, JSON.stringify(item), headers);
//   }
//   addMultipleNoUpdate<T>(items: T[], apiUrl: string): Observable<number> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<number>(apiUrl, JSON.stringify(items), headers);
//   }
//   addMultiple<T>(items: T[], apiUrl: string): Observable<number> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<number>(apiUrl, JSON.stringify(items), headers);
//   }
//   //   postFile(items: any, apiUrl: string): Observable<number> {
//   //     apiUrl = `${this.baseUrl}/${apiUrl}`;
//   //     const headers = this.getApiRequestOptionsFiles();
//   //     return this.http.post<number>(apiUrl, items, headers);
//   // }
//   postFileText<T>(item: FormData, apiUrl: string): Observable<T[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptionsAuthTextResponseType();
//     return this.http.post<T[]>(apiUrl, item, headers);
//   }
//   postFile<T>(item: FormData, apiUrl: string): Observable<T[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptionsAuthOnly();
//     return this.http.post<T[]>(apiUrl, item, headers);
//   }
//   addMultipleReturnsArray<T>(body: any, apiUrl: string): Observable<T[]> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.post<T[]>(apiUrl, body, headers);
//   }
//   edit<T>(item: T, apiUrl: string): Observable<boolean> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.put<boolean>(apiUrl, JSON.stringify(item), headers);
//   }
//   editReturnsModel<T>(item: T, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.put<T>(apiUrl, JSON.stringify(item), headers);
//   }
//   AddInDocumentToken<T>(item: T, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.put<T>(apiUrl, JSON.stringify(item), headers);
//   }
//   editMultiple<T>(items: T[], apiUrl: string): Observable<boolean> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.put<boolean>(apiUrl, JSON.stringify(items), headers);
//   }
//   remove<T>(id: number, apiUrl: string): Observable<T> {
//     apiUrl = `${this.baseUrl}/${apiUrl}/${id}`;
//     const headers = this.getApiRequestOptions();
//     return this.http.delete<T>(apiUrl, headers);
//   }
//   postNonGeneric(url: string, data: any) {
//     const requestOptions = this.getApiRequestOptions();
//     return this.http.post(url, JSON.stringify(data), requestOptions);
//   }
//   postNoData(url: string) {
//     const requestOptions = this.getApiRequestOptions();
//     return this.http.post(url, null, requestOptions);
//   }
//   postDownloadPdf(url: string, downloadRequest: DownloadRequest) {
//     const headerList = new HttpHeaders({
//       'Content-Type': 'application/json; charset=utf-8',
//       Accept: 'application/pdf'
//     });
//     const tokens = this.authService.getCurrentTokens();
//     if (tokens != null) {
//       const accessToken = tokens.access_token;
//       if (accessToken) {
//         headerList.append('Authorization', `Bearer ${accessToken}`);
//       }
//     }
//     const httpOptions = {
//       headers: headerList,
//       resquestType: 'blob'
//     };
//     return this.http.post(url, downloadRequest, httpOptions);
//   }
//   getString(apiUrl: string): Observable<string> {
//     apiUrl = `${this.baseUrl}/${apiUrl}`;
//     const headers = this.getApiRequestOptionsAuthTextResponseType();
//     return this.http.get<string>(apiUrl, headers);
//   }
// }


/***/ }),

/***/ "./src/app/services/data-point.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data-point.service.ts ***!
  \************************************************/
/*! exports provided: DataPointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPointService", function() { return DataPointService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataPointService = class DataPointService {
    constructor() {
        this.Answer = null;
        // debugMode() {
        //     return this.debug;
        // }
    }
    // constructor() {
    // }
    // public borrowerapplicationlog: BorrowerApplicationLog[] = [null];
    // public auditlog: AuditLog = null;
    // private debug: boolean = environment.debug;
    // addBorrowerApplicationLog(borrowerapplicationlog: BorrowerApplicationLog) {
    //     this.borrowerapplicationlog.push(borrowerapplicationlog);
    //     // Test
    //     console.log(this.getBorrowerApplicationLog());
    // }
    // getBorrowerApplicationLog() {
    //     return this.borrowerapplicationlog;
    // }
    addDataPoint(dataPoint) {
        if (this.dataPoints == null) {
            this.dataPoints = new Array();
            //First question to Add, datapoint 1
            this.dataPoints.push(dataPoint);
        }
        else {
            if (this.dataPoints.filter(x => x.Id == dataPoint.Id)[0] != null) {
                //Update
                this.dataPoints.filter(x => x.Id == dataPoint.Id)[0].Answer = dataPoint.Answer;
            }
            else {
                //Add
                this.dataPoints.push(dataPoint);
            }
        }
        console.log(this.dataPoints);
    }
    getPreviousDataPointState(id) {
        if (this.dataPoints != undefined) {
            if (this.dataPoints.filter(q => q.Id == id)[0] != null) {
                // if (id != 14 && id != 15) {
                //     this.Answer = this.dataPoints.filter(q => q.Id === id)[0].Answer.toString();
                // }
                // else {
                this.Answer = this.dataPoints.filter(q => q.Id === id)[0].Answer;
                // }
            }
            else {
                this.Answer = null;
            }
        }
        return this.Answer;
    }
};
DataPointService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataPointService);



/***/ }),

/***/ "./src/app/services/googlemaps.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/googlemaps.service.ts ***!
  \************************************************/
/*! exports provided: GoogleMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMaps", function() { return GoogleMaps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoogleMaps = class GoogleMaps {
    constructor(zone) {
        this.zone = zone;
    }
    getAddress(place) {
        this.address = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedAddress = place['formatted_address'];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }
    getEstablishmentAddress(place) {
        this.establishmentAddress = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedEstablishmentAddress = place['formatted_address'];
        this.zone.run(() => {
            this.formattedEstablishmentAddress = place['formatted_address'];
            this.phone = place['formatted_phone_number'];
        });
    }
    getAddrComponent(place, componentTemplate) {
        let result;
        for (let i = 0; i < place.address_components.length; i++) {
            const addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    }
    getStreetNumber(place) {
        const COMPONENT_TEMPLATE = { street_number: 'short_name' }, streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    }
    getStreet(place) {
        const COMPONENT_TEMPLATE = { route: 'long_name' }, street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    }
    getCity(place) {
        const COMPONENT_TEMPLATE = { locality: 'long_name' }, city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    }
    getState(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }
    getDistrict(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }
    getCountryShort(place) {
        const COMPONENT_TEMPLATE = { country: 'short_name' }, countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    }
    getCountry(place) {
        const COMPONENT_TEMPLATE = { country: 'long_name' }, country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    }
    getPostCode(place) {
        const COMPONENT_TEMPLATE = { postal_code: 'long_name' }, postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    }
    getPhone(place) {
        const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' }, phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    }
    test() {
        alert("test");
    }
};
GoogleMaps = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], GoogleMaps);



/***/ }),

/***/ "./src/app/services/header.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/header.service.ts ***!
  \********************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

// @Injectable()
class HeaderService {
    constructor() {
        this.progress = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.mode = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
}


/***/ }),

/***/ "./src/app/services/router.animations.ts":
/*!***********************************************!*\
  !*** ./src/app/services/router.animations.ts ***!
  \***********************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    // Forward
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-1', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-2', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-3', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-4', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-5', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-6', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-7', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-8', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-9', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-10', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-11', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-12', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-13', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-14', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-15', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => step-16', [
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
    //  Back
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-1', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-2', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-3', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-4', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-5', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-6', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-7', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-8', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-9', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-10', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-11', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-12', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-13', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-14', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-15', [
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => stepped-16', [
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

/***/ "./src/app/views/common/google-places.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/common/google-places.component.ts ***!
  \*********************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import {} from '@types/googlemaps';
let AutocompleteComponent = class AutocompleteComponent {
    constructor() {
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }
    getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: 'ZA' },
            types: [this.adressType] // 'establishment' / 'address' / 'geocode'
        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }
    invokeEvent(place) {
        this.setAddress.emit(place);
    }
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addresstext', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AutocompleteComponent.prototype, "addresstext", void 0);
AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'AutocompleteComponent',
        template: `
      <input class="input"
        type="text"
        [(ngModel)]="autocompleteInput"
        #addresstext style="padding: 12px 20px; border: 1px solid #ccc; width: 400px"
        >
    `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AutocompleteComponent);



/***/ }),

/***/ "./src/app/views/data-points/step1/step1.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step1/step1.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 offset-m3 s12\">\r\n        <div class=\"image-radio-buttons service-options\">\r\n          <p class=\"center-align\">{{question}}</p>\r\n          <div class=\"radio-group\">\r\n            <input type=\"radio\" name=\"service\" id=\"home-improvement\" value=\"home-improvement\" class=\"input-hidden\"\r\n              formControlName=\"service\" />\r\n            <label for=\"home-improvement\" class=\"col s6 m3\">\r\n              <span class=\"tli-homes_11\"></span>\r\n              <br><strong>Home Improvement</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"life-events\" value=\"life-events\" placeholder=\"service\" class=\"input-hidden\"\r\n              formControlName=\"service\" />\r\n            <label for=\"life-events\" class=\"col s6 m3\">\r\n              <span class=\"tli-wedding_16\"></span>\r\n              <br><strong>Life Events</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"veterinary\" value=\"veterinary\" class=\"input-hidden\" formControlName=\"service\" />\r\n            <label for=\"veterinary\" class=\"col s6 m3\">\r\n              <span class=\"tli-animal_19\"></span>\r\n              <br><strong>Veterinary</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"health-care\" value=\"health-care\" class=\"input-hidden\"\r\n              formControlName=\"service\" />\r\n            <label for=\"health-care\" class=\"col s6 m3\">\r\n              <span class=\"tli-healthcare_19\"></span>\r\n              <br><strong>Health-Care</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"funeral\" value=\"funeral\" class=\"input-hidden\" formControlName=\"service\" />\r\n            <label for=\"funeral\" class=\"col s6 m3\">\r\n              <span class=\"tli-halloween_03\"></span>\r\n              <br><strong>Funeral</strong>\r\n            </label>\r\n\r\n            <input type=\"radio\" name=\"service\" id=\"travel\" value=\"travel\" class=\"input-hidden\" formControlName=\"service\" />\r\n            <label for=\"travel\" class=\"col s6 m3\">\r\n              <span class=\"tli-travel_01\"></span>\r\n              <br><strong>Travel</strong>\r\n            </label>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"col s5 m4\">\r\n          <!-- <a class=\"waves-effect waves-light btn-small disabled\" (click)=\"\"><i class=\"material-icons left\">chevron_left</i>Prev</a> -->\r\n        </div>\r\n        <div class=\"col s2 m4\">\r\n        </div>\r\n        <div class=\"col s5 m4\">\r\n          <!-- <a class=\"waves-effect waves-light btn-small\" (click)=\"next()\"><i class=\"material-icons right\">chevron_right</i>Next</a> -->\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step1/step1.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step1/step1.component.ts ***!
  \************************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var _services_data_point_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _models_data_point_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/data-point.model */ "./src/app/models/data-point.model.ts");









let Step1Component = class Step1Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new _models_data_point_model__WEBPACK_IMPORTED_MODULE_8__["DataPointModel"]();
        this.answer = null;
        this.question = 'Which service would you like a loan for?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(0);
        if (this.dataPointService.getPreviousDataPointState(1) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(1)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigateByUrl('/not-found');
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'service': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 1;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('service').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-2/' + this.commonService.GetGUID());
    }
};
Step1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step1',
        template: __webpack_require__(/*! ./step1.component.html */ "./src/app/views/data-points/step1/step1.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        _services_data_point_service__WEBPACK_IMPORTED_MODULE_6__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
], Step1Component);



/***/ }),

/***/ "./src/app/views/data-points/step10/step10.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/data-points/step10/step10.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p class=\"center-align\">{{question}}</p>\r\n\t\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t\t<input [(ngModel)]=\"monthlyexpense_slider\" type=\"range\" id=\"monthlyexpense_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t\t formControlName=\"monthlyexpense_slider\" value=\"50000\" />\r\n\t\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t\t<p>R {{monthlyexpense_slider}}</p>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small next-btn\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step10/step10.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step10/step10.component.ts ***!
  \**************************************************************/
/*! exports provided: Step10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step10Component", function() { return Step10Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step10Component = class Step10Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'What is your total monthly expense?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(54);
        this.monthlyexpense_slider = '50000';
        if (this.dataPointService.getPreviousDataPointState(10) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(10)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'monthlyexpense_slider': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.monthlyexpense_slider, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 10;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('monthlyexpense_slider').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-11/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-9/' + this.commonService.GetGUID());
    }
};
Step10Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step10',
        template: __webpack_require__(/*! ./step10.component.html */ "./src/app/views/data-points/step10/step10.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step10Component);



/***/ }),

/***/ "./src/app/views/data-points/step11/step11.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/data-points/step11/step11.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"input-field\">\r\n          <div class=\"image-radio-buttons bank-options\">\r\n            <p class=\"center-align\">{{question}}</p>\r\n            <div class=\"radio-group\">\r\n                <input type=\"radio\" name=\"bank\" id=\"absa-bank-option\" formControlName=\"bank\" value=\"ABSA\" />\r\n                <label for=\"absa-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"absa-logo\"></span>\r\n                </label>\r\n\r\n                <input type=\"radio\" name=\"bank\" id=\"standardbank-bank-option\" class=\"input-hidden\" formControlName=\"bank\"\r\n                  value=\"Standard Bank\" />\r\n                <label for=\"standardbank-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"sb-logo\"></span>\r\n                </label>\r\n\r\n                <input type=\"radio\" name=\"bank\" id=\"fnb-bank-option\" class=\"input-hidden\" formControlName=\"bank\" value=\"FNB\" />\r\n                <label for=\"fnb-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"fnb-logo\"></span>\r\n                </label>\r\n\r\n                <input type=\"radio\" name=\"bank\" id=\"nedbank-bank-option\" class=\"input-hidden\" formControlName=\"bank\"\r\n                  value=\"Nedbank\" />\r\n                <label for=\"nedbank-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"nedbank-logo\"></span>\r\n                </label>\r\n\r\n                <input type=\"radio\" name=\"bank\" id=\"capitec-bank-option\" class=\"input-hidden\" formControlName=\"bank\"\r\n                  value=\"Capitec\" />\r\n                <label for=\"capitec-bank-option\" class=\"col s6 m4\">\r\n                  <span class=\"capitec-logo\"></span>\r\n                </label>\r\n            </div><!--radio-group-->\r\n          </div><!--image-radio-buttons-->\r\n        </div><!--input-field-->\r\n      </div><!--s12-->\r\n    </div><!--row-->\r\n  </div><!--container-->\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col s2 m4\">\r\n        </div>\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step11/step11.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step11/step11.component.ts ***!
  \**************************************************************/
/*! exports provided: Step11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step11Component", function() { return Step11Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step11Component = class Step11Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'With which bank do you have an account?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(60);
        if (this.dataPointService.getPreviousDataPointState(11) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(11)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'bank': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 11;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('bank').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-12/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-10/' + this.commonService.GetGUID());
    }
};
Step11Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step11',
        template: __webpack_require__(/*! ./step11.component.html */ "./src/app/views/data-points/step11/step11.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step11Component);



/***/ }),

/***/ "./src/app/views/data-points/step12/step12.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/data-points/step12/step12.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"input-field\">\r\n          <p>{{question}}</p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"0\" />\r\n              <span>0</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"1\" />\r\n              <span>1</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"2\" />\r\n              <span>2</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"3\" />\r\n              <span>3</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"dependants\" type=\"radio\" class=\"with-gap\" formControlName=\"dependants\" value=\"4+\" />\r\n              <span>4+</span> </label>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col s2 m4\">\r\n        </div>\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step12/step12.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step12/step12.component.ts ***!
  \**************************************************************/
/*! exports provided: Step12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step12Component", function() { return Step12Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step12Component = class Step12Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'How many dependants do you have?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(66);
        if (this.dataPointService.getPreviousDataPointState(12) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(12)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'dependants': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 12;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('dependants').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-13/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-11/' + this.commonService.GetGUID());
    }
};
Step12Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step12',
        template: __webpack_require__(/*! ./step12.component.html */ "./src/app/views/data-points/step12/step12.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step12Component);



/***/ }),

/***/ "./src/app/views/data-points/step13/step13.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/data-points/step13/step13.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"input-field\">\r\n          <p>{{question}}</p>\r\n          <p>\r\n            <label>\r\n              <input name=\"home-owner\" type=\"radio\" class=\"with-gap\" formControlName=\"home-owner\" value=\"yes\" />\r\n              <span>Yes</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"home-owner\" type=\"radio\" class=\"with-gap\" formControlName=\"home-owner\" value=\"renting\" />\r\n              <span>Renting</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"home-owner\" type=\"radio\" class=\"with-gap\" formControlName=\"home-owner\" value=\"living-with-family\" />\r\n              <span>Living with family</span> </label>\r\n          </p>\r\n          <p>\r\n            <label>\r\n              <input name=\"home-owner\" type=\"radio\" class=\"with-gap\" formControlName=\"home-owner\" value=\"other\" />\r\n              <span>Other</span> </label>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col s2 m4\">\r\n        </div>\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step13/step13.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step13/step13.component.ts ***!
  \**************************************************************/
/*! exports provided: Step13Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step13Component", function() { return Step13Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step13Component = class Step13Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'Are you a homeowner?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(72);
        if (this.dataPointService.getPreviousDataPointState(13) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(13)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'home-owner': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 13;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('home-owner').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-14/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-12/' + this.commonService.GetGUID());
    }
};
Step13Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step13',
        template: __webpack_require__(/*! ./step13.component.html */ "./src/app/views/data-points/step13/step13.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step13Component);



/***/ }),

/***/ "./src/app/views/data-points/step14/step14.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/data-points/step14/step14.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-focused .mat-form-field-label {\r\n  /*change color of label*/\r\n  color: #2e9eab !important;\r\n }\r\n\r\n ::ng-deep.mat-form-field-underline {\r\n  /*change color of underline*/\r\n  background-color: #2e9eab !important;\r\n  display:none;\r\n}\r\n\r\n ::ng-deep.mat-form-field-ripple {\r\n /*change color of underline when focused*/\r\n background-color: #2e9eab !important;;\r\n}\r\n\r\n .floattextarea {\r\n  resize: none;\r\n  height: 20px;\r\n}\r\n\r\n input.ng-pristine {max-width: 100%!important;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAxNC9zdGVwMTQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7Q0FDMUI7O0NBRUE7RUFDQyw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7Q0FFQTtDQUNDLHlDQUF5QztDQUN6QyxvQ0FBb0M7QUFDckM7O0NBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztDQUVBLG1CQUFtQix5QkFBeUIsQ0FBQyIsImZpbGUiOiJzdGVwMTQvc3RlcDE0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gIGNvbG9yOiAjMmU5ZWFiICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU5ZWFiICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTpub25lO1xyXG59IFxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuIGJhY2tncm91bmQtY29sb3I6ICMyZTllYWIgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi5mbG9hdHRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1wcmlzdGluZSB7bWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDt9Il19 */"

/***/ }),

/***/ "./src/app/views/data-points/step14/step14.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/data-points/step14/step14.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m6 offset-m3\">\r\n          <div class=\"input-field\">\r\n            <p>{{question}}</p>\r\n            <div class=\"group\">\r\n              <div class=\"input-field address-input\">\r\n                <AutocompleteComponent (setAddress)=\"getAddress($event)\" adressType=\"geocode\" class=\"address-input-field\" style=\"max-width:100%\" >\r\n                </AutocompleteComponent>\r\n              </div>\r\n              <!-- Street -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n                <input matInput placeholder=\"Street\" [(ngModel)]=\"street\" placeholder=\"Street\" formControlName=\"street\">\r\n              </mat-form-field>\r\n              <div class=\"clearfix\"></div>\r\n              <!-- Suburb -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n                <input matInput placeholder=\"Street\" [(ngModel)]=\"suburb\" placeholder=\"Suburb\" formControlName=\"suburb\">\r\n              </mat-form-field>\r\n              <div class=\"clearfix\"></div>\r\n              <!-- City -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n                <input matInput placeholder=\"City\" [(ngModel)]=\"city\" placeholder=\"City\" formControlName=\"city\">\r\n              </mat-form-field>\r\n              <div class=\"clearfix\"></div>\r\n              <!-- Postal Code -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\r\n                <input matInput placeholder=\"PostalCode\" [(ngModel)]=\"postalCode\" placeholder=\"PostalCode\" formControlName=\"postalcode\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"container\">\r\n        <div class=\"row pagination-btns\">\r\n        <div class=\"col s12 m6 offset-m3\">\r\n          <div class=\"col s5 m4\">\r\n            <button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n          </div>\r\n          <div class=\"col s2 m4\">\r\n          </div>\r\n          <div class=\"col s5 m4\">\r\n            <button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n          </div>\r\n        </div>  \r\n      </div>\r\n    </footer>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n      crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n  </form>"

/***/ }),

/***/ "./src/app/views/data-points/step14/step14.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step14/step14.component.ts ***!
  \**************************************************************/
/*! exports provided: Step14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step14Component", function() { return Step14Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var linq4js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! linq4js */ "./node_modules/linq4js/dist/linq4js.js");
/* harmony import */ var linq4js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(linq4js__WEBPACK_IMPORTED_MODULE_9__);










let Step14Component = class Step14Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService, zone) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.zone = zone;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'What\'s your home address?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(78);
        if (this.dataPointService.getPreviousDataPointState(14) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(14);
            this.street = this.answer[0];
            this.suburb = this.answer[1];
            this.city = this.answer[2];
            this.postalCode = this.answer[3];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'street': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.street), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'suburb': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.suburb), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.city), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'postalcode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.postalCode), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    getAddress(place) {
        this.formattedAddress = place['formatted_address'];
        console.log(place['formatted_address']);
        // tslint:disable-next-line:max-line-length
        this.street = place['address_components'].Where(w => w.types[0] === 'street_number').Select(s => s.long_name)[0] + ' ' + place['address_components'][1].long_name;
        this.suburb = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_2').Select(s => s.long_name)[0];
        this.city = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_1').Select(s => s.long_name)[0];
        this.postalCode = place['address_components'].Where(w => w.types[0] === 'postal_code').Select(s => s.long_name)[0];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 14;
        this.dataPoint.Question.push('StreetName', 'SuburbName', 'CityName', 'PostCode');
        this.dataPoint.Answer.push(this.street, this.suburb, this.city, this.postalCode);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-15/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-13/' + this.commonService.GetGUID());
    }
};
Step14Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step14',
        template: __webpack_require__(/*! ./step14.component.html */ "./src/app/views/data-points/step14/step14.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css"), __webpack_require__(/*! ./step14.component.css */ "./src/app/views/data-points/step14/step14.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], Step14Component);



/***/ }),

/***/ "./src/app/views/data-points/step15/step15.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/data-points/step15/step15.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-focused .mat-form-field-label {\r\n    /*change color of label*/\r\n    color: #2e9eab !important;\r\n   }\r\n  \r\n   ::ng-deep.mat-form-field-underline {\r\n    /*change color of underline*/\r\n    background-color: #2e9eab !important;\r\n  }\r\n  \r\n   ::ng-deep.mat-form-field-ripple {\r\n   /*change color of underline when focused*/\r\n   background-color: #2e9eab !important;;\r\n  }\r\n  \r\n   .floattextarea {\r\n    resize: none;\r\n    height: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAxNS9zdGVwMTUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7R0FDMUI7O0dBRUE7SUFDQyw0QkFBNEI7SUFDNUIsb0NBQW9DO0VBQ3RDOztHQUVBO0dBQ0MseUNBQXlDO0dBQ3pDLG9DQUFvQztFQUNyQzs7R0FFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2QiLCJmaWxlIjoic3RlcDE1L3N0ZXAxNS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgY29sb3I6ICMyZTllYWIgIWltcG9ydGFudDtcclxuICAgfVxyXG4gIFxyXG4gICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU5ZWFiICFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuICBcclxuICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyZTllYWIgIWltcG9ydGFudDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbG9hdHRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/data-points/step15/step15.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/data-points/step15/step15.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m6 offset-m3\">\r\n          <div class=\"input-field\">\r\n            <p>Personal Information</p>\r\n            <div class=\"group\">\r\n              <!-- First Name -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 70%\">\r\n                <input matInput placeholder=\"First Name\" formControlName=\"firstname\">\r\n              </mat-form-field>\r\n              <div class=\"clearfix\"></div>\r\n              <!-- Last Name -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 70%\">\r\n                <input matInput placeholder=\"Last Name\" formControlName=\"lastname\">\r\n              </mat-form-field>\r\n              <div class=\"clearfix\"></div>\r\n              <!-- Email -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 70%\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n              </mat-form-field>\r\n              <div class=\"clearfix\"></div>\r\n              <!-- Mobile Number -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 70%\">\r\n                <input matInput placeholder=\"MobileNumber\" [(ngModel)]=\"MobileNumber\" [textMask]=\"{mask: mask}\"\r\n                  formControlName=\"mobilenumber\">\r\n              </mat-form-field>\r\n              <div class=\"clearfix\"></div>\r\n              <!-- Landline Number -->\r\n              <mat-form-field class=\"example-full-width\" style=\"width: 70%\">\r\n                <input matInput placeholder=\"Landline Number (Optional)\" [(ngModel)]=\"LandlineNumber\" [textMask]=\"{mask: mask}\"\r\n                  formControlName=\"landlinenumber\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n    <footer class=\"container\">\r\n      <div class=\"row pagination-btns\">\r\n        <div class=\"col s12 m6 offset-m3\">\r\n          <div class=\"col s5 m4\">\r\n            <button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n          </div>\r\n          <div class=\"col s2 m4\">\r\n          </div>\r\n          <div class=\"col s5 m4\">\r\n            <button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n          </div>\r\n        </div>  \r\n      </div>\r\n    </footer>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n      crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n  </form>"

/***/ }),

/***/ "./src/app/views/data-points/step15/step15.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step15/step15.component.ts ***!
  \**************************************************************/
/*! exports provided: Step15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step15Component", function() { return Step15Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step15Component = class Step15Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.mobileNumber = '';
        this.landlineNumber = '';
        this.question = 'Personal Information';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(84);
        if (this.dataPointService.getPreviousDataPointState(15) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(15);
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.answer[0]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.answer[1]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.answer[2]), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'mobilenumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.answer[3]), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.CheckMobileNumber.bind(this)]),
            'landlinenumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.answer == null ? '' : this.answer[4]), [this.CheckLandlineNumber.bind(this)])
        });
    }
    CheckMobileNumber(control) {
        if (control.value == 'undefined') {
            this.mobileNumber = control.value;
            this.mobileNumberLength = this.mobileNumber.replace(/[-_() ]/g, '').length;
            if (this.mobileNumberLength !== 10 || this.mobileNumber.substring(1, 2) !== '0') {
                return { 'MobileValid': true };
            }
            else {
                return null;
            }
        }
    }
    CheckLandlineNumber(control) {
        if (control.value == 'undefined') {
            this.landlineNumber = control.value;
            this.landlineNumberLength = this.landlineNumber.replace(/[-_() ]/g, '').length;
            if ((this.landlineNumberLength !== 10 || this.landlineNumber.substring(1, 2) !== '0') && this.landlineNumberLength !== 0) {
                return { 'LandlineValid': true };
            }
            else {
                return null;
            }
        }
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 15;
        this.dataPoint.Question.push('FirstName', 'LastName', 'Email', 'MobileNumber', 'LandlineNumber');
        this.dataPoint.Answer.push(this.stepForm.value.firstname, this.stepForm.value.lastname, this.stepForm.value.email, this.stepForm.value.mobileNumber, this.stepForm.value.landlineNumber);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-16/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-14/' + this.commonService.GetGUID());
    }
};
Step15Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step15',
        template: __webpack_require__(/*! ./step15.component.html */ "./src/app/views/data-points/step15/step15.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css"), __webpack_require__(/*! ./step15.component.css */ "./src/app/views/data-points/step15/step15.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step15Component);



/***/ }),

/***/ "./src/app/views/data-points/step16/step16.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/data-points/step16/step16.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"input-field\">\r\n          <p>{{question}}</p>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"IdNumber\" placeholder=\"ID Number\" formControlName=\"idnumber\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--row-->\r\n  </div>\r\n  <footer class=\"container\">\r\n    <div class=\"row pagination-btns\">\r\n      <div class=\"col s12 m6 offset-m3\">\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n        </div>\r\n        <div class=\"col s2 m4\">\r\n        </div>\r\n        <div class=\"col s5 m4\">\r\n          <button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  </footer>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step16/step16.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step16/step16.component.ts ***!
  \**************************************************************/
/*! exports provided: Step16Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step16Component", function() { return Step16Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step16Component = class Step16Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.maxLength = 13;
        this.question = 'Personal Identification Number';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(100);
        //   if (this.dataPointService.getPreviousDataPointState(2) != null) {
        //     this.answer = this.dataPointService.getPreviousDataPointState(2)[0];
        //   }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'idnumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.CheckSAIdNumber.bind(this)])
        });
    }
    CheckSAIdNumber(control) {
        this.idnumber = control.value;
        // tslint:disable-next-line:max-line-length
        this.pattern = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
        if (!(this.pattern.test(this.idnumber) && this.idnumber.length == 13)) {
            return { 'IdNumberValid': true };
        }
        else {
            return null;
        }
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 16;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('idnumber').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        //this.router.navigateByUrl('/step-3/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-15/' + this.commonService.GetGUID());
    }
};
Step16Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step16',
        template: __webpack_require__(/*! ./step16.component.html */ "./src/app/views/data-points/step16/step16.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step16Component);



/***/ }),

/***/ "./src/app/views/data-points/step2/step2.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step2/step2.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"image-radio-buttons service-options\">\r\n\t\t\t\t\t<p class=\"center-align\">{{question}}</p>\r\n\t\t\t\t\t<div class=\"radio-group\">\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"plumbing-service\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\tvalue=\"plumbing-service\" />\r\n\t\t\t\t\t\t<label for=\"plumbing-service\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-handtools_05\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Plumbing</strong>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"roofing-service\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"roofing-service\" />\r\n\t\t\t\t\t\t<label for=\"roofing-service\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-homes_06\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Roofing</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"general-maintenance\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"general-maintenance\" />\r\n\t\t\t\t\t\t<label for=\"general-maintenance\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-ecology_13\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Solar</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"accidental-damage\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"accidental-damage\" />\r\n\t\t\t\t\t\t<label for=\"accidental-damage\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-handtools_18\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Remodel</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"aesthetic-maintenance\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"aesthetic-maintenance\" />\r\n\t\t\t\t\t\t<label for=\"aesthetic-maintenance\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-realestate_18\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Housing Addition</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"pool-spa\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"pool-spa\" />\r\n\t\t\t\t\t\t<label for=\"pool-spa\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-realestate_12\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Pool / Spa</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"hvac\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"hvac\" />\r\n\t\t\t\t\t\t<label for=\"hvac\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-industry_05\"></span>\r\n\t\t\t\t\t\t\t<br><strong>HVAC</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"windows-sliding\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"windows-sliding\" />\r\n\t\t\t\t\t\t<label for=\"windows-sliding\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-law_04\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Windows / Sliding</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"pest-control\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"pest-control\" />\r\n\t\t\t\t\t\t<label for=\"pest-control\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-ecology_13\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Pest Control</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"furniture-redecorating\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"furniture-redecorating\" />\r\n\t\t\t\t\t\t<label for=\"furniture-redecorating\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-furniture_10\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Furniture / Redecorating</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"landscaping\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\t value=\"landscaping\" />\r\n\t\t\t\t\t\t<label for=\"landscaping\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t\t<span class=\"tli-leaf_07\"></span>\r\n\t\t\t\t\t\t\t<br><strong>Landscaping</strong>\r\n\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t<input type=\"radio\" name=\"sub-service\" id=\"other-home-improvement\" class=\"input-hidden\" formControlName=\"sub-service\"\r\n\t\t\t\t\t\tvalue=\"other-home-improvement\" />\r\n\t\t\t\t\t   <label for=\"other-home-improvement\" class=\"col s6 m4\">\r\n\t\t\t\t\t\t   <span class=\"tli-realestate_20\"></span>\r\n\t\t\t\t\t\t   <br><strong>Other Home Improvement</strong>\r\n\t\t\t\t\t   </label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step2/step2.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step2/step2.component.ts ***!
  \************************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step2Component = class Step2Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'What type of home renovation?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(6);
        if (this.dataPointService.getPreviousDataPointState(2) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(2)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'sub-service': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 2;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('sub-service').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-3/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-1/' + this.commonService.GetGUID());
    }
};
Step2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step2',
        template: __webpack_require__(/*! ./step2.component.html */ "./src/app/views/data-points/step2/step2.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step2Component);



/***/ }),

/***/ "./src/app/views/data-points/step3/step3.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step3/step3.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p class=\"center-align\">{{question_1}}</p>\r\n\t\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t\t<input [(ngModel)]=\"borrowamount_slider\" type=\"range\" id=\"borrowamount_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t\t formControlName=\"borrowamount_slider\" value=\"50000\" />\r\n\t\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t\t<p>R {{borrowamount_slider}}</p>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p class=\"center-align\">{{question_2}}</p>\r\n\t\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t\t<input [(ngModel)]=\"borrowmonths_slider\" type=\"range\" id=\"borrowmonths_slider\" min=\"6\" max=\"72\" step=\"6\"\r\n\t\t\t\t\t\t formControlName=\"borrowmonths_slider\" value=\"24\" />\r\n\t\t\t\t\t\t<span class=\"amount_output\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<p>{{borrowmonths_slider}} months</p>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small next-btn\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step3/step3.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step3/step3.component.ts ***!
  \************************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step3Component = class Step3Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.question_1 = 'How much do you want to borrow?';
        this.question_1 = 'Over how long?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(12);
        this.borrowamount_slider = '5000';
        this.borrowmonths_slider = '24';
        if (this.dataPointService.getPreviousDataPointState(3) != null) {
            this.borrowamount_slider = this.dataPointService.getPreviousDataPointState(3)[0];
            this.borrowmonths_slider = this.dataPointService.getPreviousDataPointState(3)[1];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'borrowamount_slider': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.borrowamount_slider, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'borrowmonths_slider': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.borrowmonths_slider, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 3;
        this.dataPoint.Question.push(this.question_1);
        this.dataPoint.Answer.push(this.stepForm.get('borrowamount_slider').value);
        this.dataPoint.Question.push(this.question_2);
        this.dataPoint.Answer.push(this.stepForm.get('borrowmonths_slider').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-4/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-2/' + this.commonService.GetGUID());
    }
};
Step3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step3',
        template: __webpack_require__(/*! ./step3.component.html */ "./src/app/views/data-points/step3/step3.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step3Component);



/***/ }),

/***/ "./src/app/views/data-points/step4/step4.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step4/step4.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p>{{question}}</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"formal-debt-review\" type=\"radio\" class=\"with-gap\" formControlName=\"formal-debt-review\" value=\"true\" />\r\n\t\t\t\t\t\t\t<span>Yes</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"formal-debt-review\" type=\"radio\" class=\"with-gap\" formControlName=\"formal-debt-review\" value=\"false\" />\r\n\t\t\t\t\t\t\t<span>No</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step4/step4.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step4/step4.component.ts ***!
  \************************************************************/
/*! exports provided: Step4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Component", function() { return Step4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var _services_data_point_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _models_data_point_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/data-point.model */ "./src/app/models/data-point.model.ts");









let Step4Component = class Step4Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new _models_data_point_model__WEBPACK_IMPORTED_MODULE_8__["DataPointModel"]();
        this.answer = null;
        this.question = 'Have you applied for or are you under formal debt review?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(18);
        if (this.dataPointService.getPreviousDataPointState(4) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(4)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigateByUrl('/not-found');
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'formal-debt-review': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 4;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('formal-debt-review').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-5/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-3/' + this.commonService.GetGUID());
    }
};
Step4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step4',
        template: __webpack_require__(/*! ./step4.component.html */ "./src/app/views/data-points/step4/step4.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        _services_data_point_service__WEBPACK_IMPORTED_MODULE_6__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
], Step4Component);



/***/ }),

/***/ "./src/app/views/data-points/step5/step5.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step5/step5.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p>{{question}}</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"insolvent\" type=\"radio\" class=\"with-gap\" formControlName=\"insolvent\" value=\"true\" />\r\n\t\t\t\t\t\t\t<span>Yes</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"insolvent\" type=\"radio\" class=\"with-gap\" formControlName=\"insolvent\" value=\"false\" />\r\n\t\t\t\t\t\t\t<span>No</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step5/step5.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step5/step5.component.ts ***!
  \************************************************************/
/*! exports provided: Step5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step5Component", function() { return Step5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step5Component = class Step5Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'Have you applied for or been declared insolvent?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(24);
        if (this.dataPointService.getPreviousDataPointState(5) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(5)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'insolvent': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 2;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('insolvent').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-6/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-4/' + this.commonService.GetGUID());
    }
};
Step5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step5',
        template: __webpack_require__(/*! ./step5.component.html */ "./src/app/views/data-points/step5/step5.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step5Component);



/***/ }),

/***/ "./src/app/views/data-points/step6/step6.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step6/step6.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label style=\"color:#000\">\r\n\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"credit_check\" id=\"credit_check\" formControlName=\"credit_check\"/>\r\n\t\t\t\t\t\t\t<span style=\"text-align:left\">{{question}}</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small next-btn\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step6/step6.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step6/step6.component.ts ***!
  \************************************************************/
/*! exports provided: Step6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step6Component", function() { return Step6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step6Component = class Step6Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.question = 'I give permission for EasyMoolah to do a credit check.';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(30);
        if (this.dataPointService.getPreviousDataPointState(6) != null) {
            this.answer = Boolean(this.dataPointService.getPreviousDataPointState(6)[0]);
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'credit_check': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.credit_check = this.answer;
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 6;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('credit_check').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-7/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-5/' + this.commonService.GetGUID());
    }
};
Step6Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step6',
        template: __webpack_require__(/*! ./step6.component.html */ "./src/app/views/data-points/step6/step6.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step6Component);



/***/ }),

/***/ "./src/app/views/data-points/step7/step7.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step7/step7.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p>{{question}}</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Unemployed\" />\r\n\t\t\t\t\t\t\t<span>Unemployed</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Permanently Employed\" />\r\n\t\t\t\t\t\t\t<span>Permanently Employed</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Contract Worker\" />\r\n\t\t\t\t\t\t\t<span>Contract Worker</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t<input name=\"employment-status\" type=\"radio\" class=\"with-gap\" formControlName=\"employment-status\" value=\"Self-employed\" />\r\n\t\t\t\t\t\t\t<span>Self-employed</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-small next-btn\" [disabled]=\"!stepForm.valid\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step7/step7.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step7/step7.component.ts ***!
  \************************************************************/
/*! exports provided: Step7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step7Component", function() { return Step7Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step7Component = class Step7Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'What\'s your employment status?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(36);
        if (this.dataPointService.getPreviousDataPointState(7) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(7)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'employment-status': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 7;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('employment-status').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-8/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-6/' + this.commonService.GetGUID());
    }
};
Step7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step7',
        template: __webpack_require__(/*! ./step7.component.html */ "./src/app/views/data-points/step7/step7.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step7Component);



/***/ }),

/***/ "./src/app/views/data-points/step8/step8.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step8/step8.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p class=\"center-align\">{{question}}</p>\r\n\t\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t\t<input [(ngModel)]=\"grossincome_slider\" type=\"range\" id=\"grossincome_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t\t formControlName=\"grossincome_slider\" value=\"50000\" />\r\n\t\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t\t<p>R {{grossincome_slider}}</p>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small next-btn\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step8/step8.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step8/step8.component.ts ***!
  \************************************************************/
/*! exports provided: Step8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step8Component", function() { return Step8Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step8Component = class Step8Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'What\'s your gross monthly income?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(42);
        this.grossincome_slider = '50000'; // Default range
        if (this.dataPointService.getPreviousDataPointState(8) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(8)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'grossincome_slider': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.grossincome_slider, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 8;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('grossincome_slider').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-9/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-7/' + this.commonService.GetGUID());
    }
};
Step8Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step8',
        template: __webpack_require__(/*! ./step8.component.html */ "./src/app/views/data-points/step8/step8.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step8Component);



/***/ }),

/***/ "./src/app/views/data-points/step9/step9.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/data-points/step9/step9.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stepForm\" (ngSubmit)=\"Next()\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t<p class=\"center-align\">{{question}}</p>\r\n\t\t\t\t\t<p class=\"range-field\">\r\n\t\t\t\t\t\t<input [(ngModel)]=\"nettincome_slider\" type=\"range\" id=\"nettincome_slider\" min=\"5000\" max=\"100000\" step=\"100\"\r\n\t\t\t\t\t\tformControlName=\"nettincome_slider\" alue=\"50000\" />\r\n\t\t\t\t\t\t<span class=\"amount_output\">\r\n\t\t\t\t\t\t\t<p>R {{nettincome_slider}}</p>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--row-->\r\n\t</div>\r\n\t<footer class=\"container\">\r\n\t\t<div class=\"row pagination-btns\">\r\n\t\t\t<div class=\"col s12 m6 offset-m3\">\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small prev-btn\" (click)=\"Back()\"><i class=\"material-icons left\">chevron_left</i>Prev</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s2 m4\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5 m4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"waves-effect waves-light btn-small next-btn\" (click)=\"Next()\"><i class=\"material-icons right\">chevron_right</i>Next</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\r\n\t crossorigin=\"anonymous\"></script>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\r\n</form>"

/***/ }),

/***/ "./src/app/views/data-points/step9/step9.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/data-points/step9/step9.component.ts ***!
  \************************************************************/
/*! exports provided: Step9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step9Component", function() { return Step9Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/router.animations */ "./src/app/services/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/data-point.model */ "./src/app/models/data-point.model.ts");
/* harmony import */ var src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-point.service */ "./src/app/services/data-point.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









let Step9Component = class Step9Component {
    constructor(router, activatedRoute, headerService, dataPointService, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.headerService = headerService;
        this.dataPointService = dataPointService;
        this.commonService = commonService;
        this.dataPoint = new src_app_models_data_point_model__WEBPACK_IMPORTED_MODULE_6__["DataPointModel"]();
        this.answer = null;
        this.question = 'What\'s your net monthly income?';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(48);
        this.nettincome_slider = '50000'; // Default range
        if (this.dataPointService.getPreviousDataPointState(9) != null) {
            this.answer = this.dataPointService.getPreviousDataPointState(9)[0];
        }
        if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute });
        }
        // Reactive validation
        this.stepForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'nettincome_slider': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.nettincome_slider, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        this.dataPoint.Id = 9;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('nettincome_slider').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
        this.router.navigateByUrl('/step-10/' + this.commonService.GetGUID());
    }
    Back() {
        this.router.navigateByUrl('/stepped-8/' + this.commonService.GetGUID());
    }
};
Step9Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step9',
        template: __webpack_require__(/*! ./step9.component.html */ "./src/app/views/data-points/step9/step9.component.html"),
        animations: [_services_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
        styles: [__webpack_require__(/*! ../../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
        src_app_services_data_point_service__WEBPACK_IMPORTED_MODULE_7__["DataPointService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
], Step9Component);



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/css/em_site_theme.css\" type=\"text/css\">\r\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\">\r\n</head>\r\n<header>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m6 offset-m3\">\r\n                <a href=\"index.html\"><img class=\"responsive-img logo\"\r\n                        src=\"https://res.cloudinary.com/kemoso/image/upload/v1541622491/EasyMoolah/em_logo_final.svg\"\r\n                        alt=\"EasyMoolah\" width=\"340\" /></a>\r\n            </div>\r\n            <div class=\"col s12 m6 offset-m3\">\r\n                <h5 class=\"center-align\">Borrower Application</h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m6 offset-m3\">\r\n                <mat-progress-bar mode=\"{{mode}}\" value=\"{{progress}}\"></mat-progress-bar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/header.service */ "./src/app/services/header.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(headerService) {
        this.headerService = headerService;
        this.progress = 0;
        this.mode = '';
    }
    ngOnInit() {
        // Update the progress bar
        this.headerService.progress.subscribe((progress) => {
            this.progress = progress;
        });
        this.headerService.mode.subscribe((mode) => {
            this.mode = mode;
        });
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/views/landing-screen/landing-screen.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/landing-screen/landing-screen.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col s12 m6 offset-m3\">\r\n            <div class=\"introduction center-align\">\r\n                <h2>How does EasyMoolah work?</h2>\r\n                <p>You tell us your financial goals, we give you the resources to get where you want to be.</p>\r\n                <p>Compare rates, services, and features offered by different financial service providers.</p>\r\n                <p>Fill out one simple form and get competing offers to find your best option.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--row-->\r\n</div>\r\n<footer class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col s12 m6 offset-m3\">\r\n            <div class=\"col s12\" (click)=\"Begin()\">\r\n                <button class=\"waves-effect waves-light btn-large center-align-btn\">Begin</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\">\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\"\r\n    integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>"

/***/ }),

/***/ "./src/app/views/landing-screen/landing-screen.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing-screen/landing-screen.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingScreenComponent", function() { return LandingScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_application_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/application.model */ "./src/app/models/application.model.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let LandingScreenComponent = class LandingScreenComponent {
    constructor(router, headerService, commonService) {
        this.router = router;
        this.headerService = headerService;
        this.commonService = commonService;
        this.application = new src_app_models_application_model__WEBPACK_IMPORTED_MODULE_5__["ApplicationModel"]();
        //super();
    }
    ngOnInit() {
        this.headerService.mode.next('determinate');
        this.application.guid = angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID(); // Generate GUID
        this.application.browser = ''; // npm install ngx-device-detector --save
        this.application.startDate = new Date();
        this.application.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].version.toString();
        this.application.iPAddress = window.location.origin.toString();
        this.application.formData = '';
        this.application.createdDate = new Date();
        this.application.changedDate = new Date();
        this.commonService.SetApplication(this.application);
        // TODO: Insert to the Application table    
    }
    Begin() {
        this.router.navigateByUrl('/step-1/' + this.commonService.GetGUID());
    }
};
LandingScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-screen',
        template: __webpack_require__(/*! ./landing-screen.component.html */ "./src/app/views/landing-screen/landing-screen.component.html"),
        styles: [__webpack_require__(/*! ../../../assets/css/em_site_theme.css */ "./src/assets/css/em_site_theme.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], LandingScreenComponent);



/***/ }),

/***/ "./src/app/views/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/views/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/views/not-found/not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/assets/css/em_site_theme.css":
/*!******************************************!*\
  !*** ./src/assets/css/em_site_theme.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==========================\r\nGeneral\r\n============================*/\r\nhtml, body {font-family: 'Montserrat', sans-serif;}\r\nh1 {font-size:28px; font-weight: 700}\r\nh2 {\r\n    font-size: 22px;\r\n    font-weight: 700\r\n}\r\nh3 {font-size:21px; font-weight: 700}\r\nh4 {font-size: 18px; font-weight: 700}\r\np {font-size:16px;}\r\n.amount_output p {font-size:1.5em; margin-top:0}\r\n.btn, .btn-small, .btn-large {\r\n    background-color: #55c4d1;\r\n    box-sizing: inherit;\r\n}\r\n.btn:hover, .btn-large:hover, .btn-small:hover {background-color:#0393a0}\r\n.progress {background-color:rgba(160,222,229,0.5)}\r\n.progress .determinate {background-color: #55c4d1}\r\n.center-align-btn {display: block; margin:0 auto}\r\n.page-progress {margin: 30px 0 50px}\r\ninput[type=text]:not(.browser-default):focus:not([readonly]) {border-bottom-color: #55c4d1}\r\ninput[type=range]+.thumb {display:none}\r\n.input-hidden {\r\n\tposition: absolute;\r\n\tleft: -9999px;\r\n}\r\n/*form .mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple {height:0}*/\r\n.service-options input[type=\"radio\"]:checked + label > span {}\r\n.service-options strong {text-align: center; display: block}\r\n/* Stuff after this is only to make things more pretty */\r\n.sub-service-buttons input[type=\"radio\"] + label {\r\n    display: block;\r\n    background-color: #eee;\r\n    vertical-align: middle;\r\n    margin-bottom: 5px;\r\n    height: 80px;\r\n    margin-right: 5px;\r\n    box-sizing: border-box;\r\n    max-width: 80%;\r\n}\r\n.sub-service-buttons input[type=\"radio\"]:checked + label {background-color:#2a2e76};\r\n.sub-service-buttons input[type=\"radio\"]:checked + label:hover {color:#fff}\r\n.image-radio-buttons input[type=\"radio\"] + label {display:block;text-align: center; padding: 10px}\r\n.service-options input[type=\"radio\"] + label > span {font-size:40px; display: block; text-align: center; margin:10px 0 0}\r\n.service-options.image-radio-buttons input[type=\"radio\"] + label:hover {color:#2e9eab; cursor: pointer;}\r\n.service-options.image-radio-buttons input[type=\"radio\"] + label:hover > span {}\r\n.image-radio-buttons.bank-options input[type=\"radio\"] + label:hover {background-color:transparent; cursor: pointer;}\r\n.image-radio-buttons input[type=\"radio\"] + label:hover\r\n.service-options input[type=\"radio\"] + label:last-child > span {}\r\n.service-options input[type=\"radio\"] + label:hover {color:#fff}\r\n.service-options input[type=\"radio\"]:checked + label > span {color:#fff}\r\n.service-options input[type=\"radio\"]:checked + label {background-color:#2a2e76; color:#fff}\r\n.service-options input[type=\"radio\"]:checked + label strong {color:#fff}\r\n.bank-options input[type=\"radio\"] + label > span {width: 110px; height:110px; display:block; background-image: url('bank-logos-sprite-sheet.png'); opacity: 0.5;}\r\n.bank-options input[type=\"radio\"] + label:hover > span, .bank-options input[type=\"radio\"]:checked + label > span {opacity:1; background-color:transparent}\r\n.absa-logo {background-position:-140px -10px}\r\n.bank-options input[type=\"radio\"] + label:hover .absa-logo, .bank-options input[type=\"radio\"]:checked + label .absa-logo {background-position:-10px -10px}\r\n.capitec-logo {background-position:-140px -140px}\r\n.bank-options input[type=\"radio\"] + label:hover .capitec-logo, .bank-options input[type=\"radio\"]:checked + label .capitec-logo {background-position:-10px -140px}\r\n.fnb-logo {background-position:-270px -140px}\r\n.bank-options input[type=\"radio\"] + label:hover .fnb-logo, .bank-options input[type=\"radio\"]:checked + label .fnb-logo {background-position:-270px -10px}\r\n.nedbank-logo {background-position:-140px -270px}\r\n.bank-options input[type=\"radio\"] + label:hover .nedbank-logo, .bank-options input[type=\"radio\"]:checked + label .nedbank-logo {background-position:-10px -270px}\r\n.sb-logo {background-position:-400px -10px}\r\n.bank-options input[type=\"radio\"] + label:hover .sb-logo, .bank-options input[type=\"radio\"]:checked + label .sb-logo {background-position:-270px -270px}\r\n/*Begin styling for range slider */\r\ninput[type=range] {\r\n    -webkit-appearance: none;\r\n    margin: 18px 0;\r\n    width: 100%;\r\n  }\r\ninput[type=range]:focus {\r\n    outline: none;\r\n  }\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n    width: 100%;\r\n    height: 8.4px;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    background: #3f48cc;\r\n    border-radius: 1.3px;\r\n    border: 0.2px solid #010101;\r\n  }\r\ninput[type=range]::-webkit-slider-thumb {\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    border: 1px solid #000000;\r\n    height: 36px;\r\n    width: 16px;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    cursor: pointer;\r\n    -webkit-appearance: none;\r\n    margin-top: -14px;\r\n  }\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n    background: #55c4d1;\r\n  }\r\ninput[type=range]::-moz-range-track {\r\n    width: 100%;\r\n    height: 8.4px;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    background: #3f48cc;\r\n    border-radius: 1.3px;\r\n    border: 0.2px solid #010101;\r\n  }\r\ninput[type=range]::-moz-range-thumb {\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    border: 1px solid #000000;\r\n    height: 36px;\r\n    width: 16px;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    cursor: pointer;\r\n  }\r\ninput[type=range]::-ms-track {\r\n    width: 100%;\r\n    height: 8.4px;\r\n    cursor: pointer;\r\n    animate: 0.2s;\r\n    background: transparent;\r\n    border-color: transparent;\r\n    border-width: 16px 0;\r\n    color: transparent;\r\n  }\r\ninput[type=range]::-ms-fill-lower {\r\n    background: #3f48cc;\r\n    border: 0.2px solid #010101;\r\n    border-radius: 2.6px;\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  }\r\ninput[type=range]::-ms-fill-upper {\r\n    background: #3f48cc;\r\n    border: 0.2px solid #010101;\r\n    border-radius: 2.6px;\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  }\r\ninput[type=range]::-ms-thumb {\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    border: 1px solid #000000;\r\n    height: 36px;\r\n    width: 16px;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    cursor: pointer;\r\n}\r\ninput[type=range]:focus::-ms-fill-lower {\r\n  background: #3f48cc;\r\n}\r\ninput[type=range]:focus::-ms-fill-upper {\r\n  background: #3f48cc;\r\n}\r\n/*End styling for range slider*/\r\n/*==========================\r\nHeader\r\n============================*/\r\nheader {margin-bottom: 30px}\r\n.logo {display: block; margin: 0 auto}\r\n/*==========================\r\nBody/Content\r\n============================*/\r\n.pagination-btns .material-icons.left {margin-right:5px}\r\n.pagination-btns .btn-small .material-icons.right {margin-left:5px}\r\n.amount_output {\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    text-align: center;\t\r\n}\r\nform mat-form-field .mat-form-field-underline {height:0}\r\n.next-btn {float:right}\r\n[type=\"radio\"]:checked+span {color:#2e9eab}\r\n.address-input-field input, .address-input input {max-width:100%}\r\n/*==========================\r\nFooter\r\n============================*/\r\n.footer_menu_bottom a {color:#55c4d1}\r\n.footer_menu_bottom a:hover {color:#2e9eab; text-decoration: underline}\r\nul.footer_menu_bottom {\r\n\tdisplay:block; width:160px; margin:150px auto 0;\r\n\t-webkit-margin-before: 0;\r\n\t        margin-block-start: 0;\r\n    -webkit-margin-after: 0;\r\n            margin-block-end: 0;\r\n    -webkit-margin-start: 50%;\r\n            margin-inline-start: 50%;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    -webkit-padding-start: 0;\r\n            padding-inline-start: 0;\r\n}\r\n.footer_menu_bottom li {float:left}\r\n.footer_menu_bottom li::after {content:'|'; padding: 0 10px; display:inline-block}\r\n.footer_menu_bottom li:last-child::after {content: ''; padding: 0}\r\ninput.no-double-underline-input, input.no-double-underline-input:not([type]):focus:not([readonly]) {border-bottom:0; margin: 0; box-shadow:none}\r\n.no-double-underline .mat-form-field-appearance-legacy .mat-form-field-infix {padding-bottom: 0}\r\nform .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-empty {color:#2e9eab}\r\n.fsp-result-table label {display:block}\r\n.fsp-result-table tr {border-bottom:none}\r\n.fsp_logo {width:90px; height: 90px;}\r\n/*==========================\r\nMedia Queries\r\n============================*/\r\n@media only screen and (max-width:600px) {\r\n    .mat-progress-bar {height: 6px}\r\n    .image-radio-buttons input[type=\"radio\"] + label {min-height: 140px}\r\n    .fsp-result-table .call-btn {\r\n        padding: 15px 10px;\r\n        font-size: 12px;\r\n        line-height: 20px!important;\r\n    }\r\n    .fsp-result-table .call-btn i {display:block; margin-bottom:5px}\r\n}\r\n@media only screen and (min-width:601px) {\r\n    .service-options input[type=\"radio\"] + label {height:120px; margin-bottom:20px}\r\n    .btn, .btn-small, .btn-large {padding: 0px 9px;}\r\n    .service-options input[type=\"radio\"] + label > span {margin:10px 0}\r\n    .fsp_logo {width:160px; height:160px}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9jc3MvZW1fc2l0ZV90aGVtZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUU2QjtBQUM3QixZQUFZLHFDQUFxQyxDQUFDO0FBQ2xELElBQUksY0FBYyxFQUFFLGdCQUFnQjtBQUNwQztJQUNJLGVBQWU7SUFDZjtBQUNKO0FBQ0EsSUFBSSxjQUFjLEVBQUUsZ0JBQWdCO0FBQ3BDLElBQUksZUFBZSxFQUFFLGdCQUFnQjtBQUNyQyxHQUFHLGNBQWMsQ0FBQztBQUNsQixrQkFBa0IsZUFBZSxFQUFFLFlBQVk7QUFDL0M7SUFDSSx5QkFBeUI7SUFHekIsbUJBQW1CO0FBQ3ZCO0FBQ0EsZ0RBQWdELHdCQUF3QjtBQUN4RSxXQUFXLHNDQUFzQztBQUNqRCx3QkFBd0IseUJBQXlCO0FBQ2pELG1CQUFtQixjQUFjLEVBQUUsYUFBYTtBQUNoRCxnQkFBZ0IsbUJBQW1CO0FBQ25DLDhEQUE4RCw0QkFBNEI7QUFDMUYsMEJBQTBCLFlBQVk7QUFDdEM7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtBQUNkO0FBQ0Esb0hBQW9IO0FBQ3BILDZEQUE2RDtBQUM3RCx5QkFBeUIsa0JBQWtCLEVBQUUsY0FBYztBQUMzRCx3REFBd0Q7QUFDeEQ7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUdqQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUNBLDBEQUEwRCx3QkFBd0IsQ0FBQTtBQUNsRixnRUFBZ0UsVUFBVTtBQUMxRSxrREFBa0QsYUFBYSxDQUFDLGtCQUFrQixFQUFFLGFBQWE7QUFDakcscURBQXFELGNBQWMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsZUFBZTtBQUN4SCx3RUFBd0UsYUFBYSxFQUFFLGVBQWUsQ0FBQztBQUN2RywrRUFBK0U7QUFDL0UscUVBQXFFLDRCQUE0QixFQUFFLGVBQWUsQ0FBQztBQUNuSDtnRUFDZ0U7QUFDaEUsb0RBQW9ELFVBQVU7QUFDOUQsNkRBQTZELFVBQVU7QUFDdkUsc0RBQXNELHdCQUF3QixFQUFFLFVBQVU7QUFDMUYsNkRBQTZELFVBQVU7QUFDdkUsa0RBQWtELFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLG9EQUE0RCxFQUFFLFlBQVksQ0FBQztBQUN4SyxrSEFBa0gsU0FBUyxFQUFFLDRCQUE0QjtBQUN6SixZQUFZLGdDQUFnQztBQUM1QywwSEFBMEgsK0JBQStCO0FBQ3pKLGVBQWUsaUNBQWlDO0FBQ2hELGdJQUFnSSxnQ0FBZ0M7QUFDaEssV0FBVyxpQ0FBaUM7QUFDNUMsd0hBQXdILGdDQUFnQztBQUN4SixlQUFlLGlDQUFpQztBQUNoRCxnSUFBZ0ksZ0NBQWdDO0FBQ2hLLFVBQVUsZ0NBQWdDO0FBQzFDLHNIQUFzSCxpQ0FBaUM7QUFFdkosa0NBQWtDO0FBQ2xDO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxXQUFXO0VBQ2I7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtFQUM3QjtBQUNBO0lBQ0Usb0RBQW9EO0lBQ3BELHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtFQUM3QjtBQUNBO0lBQ0Usb0RBQW9EO0lBQ3BELHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsb0RBQW9EO0VBQ3REO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixvREFBb0Q7RUFDdEQ7QUFDQTtJQUNFLG9EQUFvRDtJQUNwRCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0EsK0JBQStCO0FBRS9COzs2QkFFNkI7QUFDN0IsUUFBUSxtQkFBbUI7QUFDM0IsT0FBTyxjQUFjLEVBQUUsY0FBYztBQUNyQzs7NkJBRTZCO0FBQzdCLHVDQUF1QyxnQkFBZ0I7QUFDdkQsbURBQW1ELGVBQWU7QUFDbEU7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQsV0FBVyxXQUFXO0FBQ3RCLDZCQUE2QixhQUFhO0FBQzFDLGtEQUFrRCxjQUFjO0FBRWhFOzs2QkFFNkI7QUFDN0IsdUJBQXVCLGFBQWE7QUFDcEMsNkJBQTZCLGFBQWEsRUFBRSwwQkFBMEI7QUFDdEU7Q0FDQyxhQUFhLEVBQUUsV0FBVyxFQUFFLG1CQUFtQjtDQUMvQyx3QkFBcUI7U0FBckIscUJBQXFCO0lBQ2xCLHVCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQywrQkFBK0IsV0FBVyxFQUFFLGVBQWUsRUFBRSxvQkFBb0I7QUFDakYsMENBQTBDLFdBQVcsRUFBRSxVQUFVO0FBQ2pFLG9HQUFvRyxlQUFlLEVBQUUsU0FBUyxFQUFFLGVBQWU7QUFDL0ksOEVBQThFLGlCQUFpQjtBQUMvRiw2RUFBNkUsYUFBYTtBQUMxRix5QkFBeUIsYUFBYTtBQUN0QyxzQkFBc0Isa0JBQWtCO0FBQ3hDLFdBQVcsVUFBVSxFQUFFLFlBQVksQ0FBQztBQUNwQzs7NkJBRTZCO0FBQzdCO0lBQ0ksbUJBQW1CLFdBQVc7SUFDOUIsa0RBQWtELGlCQUFpQjtJQUNuRTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsMkJBQTJCO0lBQy9CO0lBQ0EsK0JBQStCLGFBQWEsRUFBRSxpQkFBaUI7QUFDbkU7QUFDQTtJQUNJLDhDQUE4QyxZQUFZLEVBQUUsa0JBQWtCO0lBQzlFLDhCQUE4QixnQkFBZ0IsQ0FBQztJQUMvQyxxREFBcUQsYUFBYTtJQUNsRSxXQUFXLFdBQVcsRUFBRSxZQUFZO0FBQ3hDIiwiZmlsZSI6Ii4uLy4uLy4uL2Fzc2V0cy9jc3MvZW1fc2l0ZV90aGVtZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkdlbmVyYWxcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmh0bWwsIGJvZHkge2ZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7fVxyXG5oMSB7Zm9udC1zaXplOjI4cHg7IGZvbnQtd2VpZ2h0OiA3MDB9XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcclxufVxyXG5oMyB7Zm9udC1zaXplOjIxcHg7IGZvbnQtd2VpZ2h0OiA3MDB9XHJcbmg0IHtmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA3MDB9XHJcbnAge2ZvbnQtc2l6ZToxNnB4O31cclxuLmFtb3VudF9vdXRwdXQgcCB7Zm9udC1zaXplOjEuNWVtOyBtYXJnaW4tdG9wOjB9XHJcbi5idG4sIC5idG4tc21hbGwsIC5idG4tbGFyZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YzRkMTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuLmJ0bjpob3ZlciwgLmJ0bi1sYXJnZTpob3ZlciwgLmJ0bi1zbWFsbDpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjojMDM5M2EwfVxyXG4ucHJvZ3Jlc3Mge2JhY2tncm91bmQtY29sb3I6cmdiYSgxNjAsMjIyLDIyOSwwLjUpfVxyXG4ucHJvZ3Jlc3MgLmRldGVybWluYXRlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNGQxfVxyXG4uY2VudGVyLWFsaWduLWJ0biB7ZGlzcGxheTogYmxvY2s7IG1hcmdpbjowIGF1dG99XHJcbi5wYWdlLXByb2dyZXNzIHttYXJnaW46IDMwcHggMCA1MHB4fVxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkge2JvcmRlci1ib3R0b20tY29sb3I6ICM1NWM0ZDF9XHJcbmlucHV0W3R5cGU9cmFuZ2VdKy50aHVtYiB7ZGlzcGxheTpub25lfVxyXG4uaW5wdXQtaGlkZGVuIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogLTk5OTlweDtcclxufVxyXG4vKmZvcm0gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQ6bm90KC5tYXQtZm9jdXNlZCkgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7aGVpZ2h0OjB9Ki9cclxuLnNlcnZpY2Utb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsID4gc3BhbiB7fVxyXG4uc2VydmljZS1vcHRpb25zIHN0cm9uZyB7dGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBibG9ja31cclxuLyogU3R1ZmYgYWZ0ZXIgdGhpcyBpcyBvbmx5IHRvIG1ha2UgdGhpbmdzIG1vcmUgcHJldHR5ICovXHJcbi5zdWItc2VydmljZS1idXR0b25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG4uc3ViLXNlcnZpY2UtYnV0dG9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtiYWNrZ3JvdW5kLWNvbG9yOiMyYTJlNzZ9O1xyXG4uc3ViLXNlcnZpY2UtYnV0dG9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmhvdmVyIHtjb2xvcjojZmZmfVxyXG4uaW1hZ2UtcmFkaW8tYnV0dG9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDEwcHh9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgPiBzcGFuIHtmb250LXNpemU6NDBweDsgZGlzcGxheTogYmxvY2s7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOjEwcHggMCAwfVxyXG4uc2VydmljZS1vcHRpb25zLmltYWdlLXJhZGlvLWJ1dHRvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIge2NvbG9yOiMyZTllYWI7IGN1cnNvcjogcG9pbnRlcjt9XHJcbi5zZXJ2aWNlLW9wdGlvbnMuaW1hZ2UtcmFkaW8tYnV0dG9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlciA+IHNwYW4ge31cclxuLmltYWdlLXJhZGlvLWJ1dHRvbnMuYmFuay1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50OyBjdXJzb3I6IHBvaW50ZXI7fVxyXG4uaW1hZ2UtcmFkaW8tYnV0dG9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlclxyXG4uc2VydmljZS1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmxhc3QtY2hpbGQgPiBzcGFuIHt9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIge2NvbG9yOiNmZmZ9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW4ge2NvbG9yOiNmZmZ9XHJcbi5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7YmFja2dyb3VuZC1jb2xvcjojMmEyZTc2OyBjb2xvcjojZmZmfVxyXG4uc2VydmljZS1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgc3Ryb25nIHtjb2xvcjojZmZmfVxyXG4uYmFuay1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsID4gc3BhbiB7d2lkdGg6IDExMHB4OyBoZWlnaHQ6MTEwcHg7IGRpc3BsYXk6YmxvY2s7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvYmFuay1sb2dvcy1zcHJpdGUtc2hlZXQucG5nKTsgb3BhY2l0eTogMC41O31cclxuLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlciA+IHNwYW4sIC5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW4ge29wYWNpdHk6MTsgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1cclxuLmFic2EtbG9nbyB7YmFja2dyb3VuZC1wb3NpdGlvbjotMTQwcHggLTEwcHh9XHJcbi5iYW5rLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6aG92ZXIgLmFic2EtbG9nbywgLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIC5hYnNhLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTEwcHggLTEwcHh9XHJcbi5jYXBpdGVjLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTE0MHB4IC0xNDBweH1cclxuLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlciAuY2FwaXRlYy1sb2dvLCAuYmFuay1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgLmNhcGl0ZWMtbG9nbyB7YmFja2dyb3VuZC1wb3NpdGlvbjotMTBweCAtMTQwcHh9XHJcbi5mbmItbG9nbyB7YmFja2dyb3VuZC1wb3NpdGlvbjotMjcwcHggLTE0MHB4fVxyXG4uYmFuay1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmhvdmVyIC5mbmItbG9nbywgLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIC5mbmItbG9nbyB7YmFja2dyb3VuZC1wb3NpdGlvbjotMjcwcHggLTEwcHh9XHJcbi5uZWRiYW5rLWxvZ28ge2JhY2tncm91bmQtcG9zaXRpb246LTE0MHB4IC0yNzBweH1cclxuLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlciAubmVkYmFuay1sb2dvLCAuYmFuay1vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgLm5lZGJhbmstbG9nbyB7YmFja2dyb3VuZC1wb3NpdGlvbjotMTBweCAtMjcwcHh9XHJcbi5zYi1sb2dvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00MDBweCAtMTBweH1cclxuLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpob3ZlciAuc2ItbG9nbywgLmJhbmstb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIC5zYi1sb2dvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yNzBweCAtMjcwcHh9XHJcblxyXG4vKkJlZ2luIHN0eWxpbmcgZm9yIHJhbmdlIHNsaWRlciAqL1xyXG5pbnB1dFt0eXBlPXJhbmdlXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDE4cHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDguNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYW5pbWF0ZTogMC4ycztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0OGNjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4zcHg7XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzU1YzRkMTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDguNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYW5pbWF0ZTogMC4ycztcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0OGNjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4zcHg7XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4LjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFuaW1hdGU6IDAuMnM7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDE2cHggMDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2VyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzZjQ4Y2M7XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkICMwMTAxMDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjZweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC11cHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0OGNjO1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMDEwMTAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMi42cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1iIHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XHJcbiAgYmFja2dyb3VuZDogIzNmNDhjYztcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzZjQ4Y2M7XHJcbn1cclxuLypFbmQgc3R5bGluZyBmb3IgcmFuZ2Ugc2xpZGVyKi9cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuSGVhZGVyXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5oZWFkZXIge21hcmdpbi1ib3R0b206IDMwcHh9XHJcbi5sb2dvIHtkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwIGF1dG99XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQm9keS9Db250ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4ucGFnaW5hdGlvbi1idG5zIC5tYXRlcmlhbC1pY29ucy5sZWZ0IHttYXJnaW4tcmlnaHQ6NXB4fVxyXG4ucGFnaW5hdGlvbi1idG5zIC5idG4tc21hbGwgLm1hdGVyaWFsLWljb25zLnJpZ2h0IHttYXJnaW4tbGVmdDo1cHh9XHJcbi5hbW91bnRfb3V0cHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1x0XHJcbn1cclxuZm9ybSBtYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtoZWlnaHQ6MH1cclxuLm5leHQtYnRuIHtmbG9hdDpyaWdodH1cclxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK3NwYW4ge2NvbG9yOiMyZTllYWJ9XHJcbi5hZGRyZXNzLWlucHV0LWZpZWxkIGlucHV0LCAuYWRkcmVzcy1pbnB1dCBpbnB1dCB7bWF4LXdpZHRoOjEwMCV9XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkZvb3RlclxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmZvb3Rlcl9tZW51X2JvdHRvbSBhIHtjb2xvcjojNTVjNGQxfVxyXG4uZm9vdGVyX21lbnVfYm90dG9tIGE6aG92ZXIge2NvbG9yOiMyZTllYWI7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lfVxyXG51bC5mb290ZXJfbWVudV9ib3R0b20ge1xyXG5cdGRpc3BsYXk6YmxvY2s7IHdpZHRoOjE2MHB4OyBtYXJnaW46MTUwcHggYXV0byAwO1xyXG5cdG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1MCU7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbn1cclxuLmZvb3Rlcl9tZW51X2JvdHRvbSBsaSB7ZmxvYXQ6bGVmdH1cclxuLmZvb3Rlcl9tZW51X2JvdHRvbSBsaTo6YWZ0ZXIge2NvbnRlbnQ6J3wnOyBwYWRkaW5nOiAwIDEwcHg7IGRpc3BsYXk6aW5saW5lLWJsb2NrfVxyXG4uZm9vdGVyX21lbnVfYm90dG9tIGxpOmxhc3QtY2hpbGQ6OmFmdGVyIHtjb250ZW50OiAnJzsgcGFkZGluZzogMH1cclxuaW5wdXQubm8tZG91YmxlLXVuZGVybGluZS1pbnB1dCwgaW5wdXQubm8tZG91YmxlLXVuZGVybGluZS1pbnB1dDpub3QoW3R5cGVdKTpmb2N1czpub3QoW3JlYWRvbmx5XSkge2JvcmRlci1ib3R0b206MDsgbWFyZ2luOiAwOyBib3gtc2hhZG93Om5vbmV9XHJcbi5uby1kb3VibGUtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge3BhZGRpbmctYm90dG9tOiAwfVxyXG5mb3JtIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtZW1wdHkge2NvbG9yOiMyZTllYWJ9XHJcbi5mc3AtcmVzdWx0LXRhYmxlIGxhYmVsIHtkaXNwbGF5OmJsb2NrfVxyXG4uZnNwLXJlc3VsdC10YWJsZSB0ciB7Ym9yZGVyLWJvdHRvbTpub25lfVxyXG4uZnNwX2xvZ28ge3dpZHRoOjkwcHg7IGhlaWdodDogOTBweDt9XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuTWVkaWEgUXVlcmllc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAubWF0LXByb2dyZXNzLWJhciB7aGVpZ2h0OiA2cHh9XHJcbiAgICAuaW1hZ2UtcmFkaW8tYnV0dG9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7bWluLWhlaWdodDogMTQwcHh9XHJcbiAgICAuZnNwLXJlc3VsdC10YWJsZSAuY2FsbC1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZzcC1yZXN1bHQtdGFibGUgLmNhbGwtYnRuIGkge2Rpc3BsYXk6YmxvY2s7IG1hcmdpbi1ib3R0b206NXB4fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDFweCkge1xyXG4gICAgLnNlcnZpY2Utb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7aGVpZ2h0OjEyMHB4OyBtYXJnaW4tYm90dG9tOjIwcHh9XHJcbiAgICAuYnRuLCAuYnRuLXNtYWxsLCAuYnRuLWxhcmdlIHtwYWRkaW5nOiAwcHggOXB4O31cclxuICAgIC5zZXJ2aWNlLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgPiBzcGFuIHttYXJnaW46MTBweCAwfVxyXG4gICAgLmZzcF9sb2dvIHt3aWR0aDoxNjBweDsgaGVpZ2h0OjE2MHB4fVxyXG59Il19 */"

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
const environment = {
    production: false,
    appUrl: 'http://localhost:52358/api',
    version: 1.1,
    googleapi: ''
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Easymoolah\EasyMoolah\Development\EasyMoolah-Web-Shell\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map