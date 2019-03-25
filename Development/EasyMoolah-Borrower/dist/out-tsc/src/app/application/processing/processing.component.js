import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';
var ProcessingComponent = /** @class */ (function () {
    function ProcessingComponent(router, headerService) {
        this.router = router;
        this.headerService = headerService;
    }
    ProcessingComponent.prototype.ngOnInit = function () {
        this.headerService.mode.next('query');
        this.go_next();
        // this.headerservice.setMode('indeterminate');
    };
    ProcessingComponent.prototype.go_next = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl('/financialresult', { skipLocationChange: true });
        }, 3000);
    };
    ProcessingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-processing',
            templateUrl: './processing.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            HeaderService])
    ], ProcessingComponent);
    return ProcessingComponent;
}());
export { ProcessingComponent };
//# sourceMappingURL=processing.component.js.map