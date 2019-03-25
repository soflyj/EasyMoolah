import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { BorrowerService } from 'src/app/service/borrower.service';
import { AuditLog } from 'src/app/model/auditlog.model';
import { HeaderService } from 'src/app/service/header.service';
var LandingComponent = /** @class */ (function () {
    function LandingComponent(borrowerService, headerService) {
        this.borrowerService = borrowerService;
        this.headerService = headerService;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.headerService.mode.next('determinate');
        this.StartTime = new Date();
        this.GUID = UUID.UUID(); // Generate GUID
        this.IP = window.location.origin; // this will give you the ip:port
        this.borrowerService.addAuditLog(new AuditLog(this.GUID, this.IP, '', this.StartTime.toString(), ''));
        console.log(this.borrowerService.getAuditLog());
    };
    LandingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['../../../assets/css/em_site_theme.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BorrowerService, HeaderService])
    ], LandingComponent);
    return LandingComponent;
}());
export { LandingComponent };
//# sourceMappingURL=landing.component.js.map