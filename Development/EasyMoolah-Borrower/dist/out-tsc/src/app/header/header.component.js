import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(headerService) {
        this.headerService = headerService;
        this.progress = 0;
        this.mode = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Update the progress bar
        this.headerService.progress.subscribe(function (progress) {
            _this.progress = progress;
        });
        this.headerService.mode.subscribe(function (mode) {
            _this.mode = mode;
        });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HeaderService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map