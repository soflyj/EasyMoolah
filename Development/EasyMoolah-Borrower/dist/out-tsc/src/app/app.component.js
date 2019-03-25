import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { routerTransition } from './common/router.animations';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sample2';
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            animations: [routerTransition]
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map