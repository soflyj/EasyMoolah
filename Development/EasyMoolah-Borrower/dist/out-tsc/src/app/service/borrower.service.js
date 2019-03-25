import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BorrowerService = /** @class */ (function () {
    function BorrowerService() {
        this.borrowerapplicationlog = [null];
        this.question = [null];
        this.auditlog = null;
    }
    BorrowerService.prototype.addBorrowerApplicationLog = function (borrowerapplicationlog) {
        this.borrowerapplicationlog.push(borrowerapplicationlog);
        // Test
        console.log(this.getBorrowerApplicationLog());
    };
    BorrowerService.prototype.getBorrowerApplicationLog = function () {
        return this.borrowerapplicationlog;
    };
    BorrowerService.prototype.addToQuestionLog = function (question) {
        this.question.push(question);
    };
    BorrowerService.prototype.addAuditLog = function (auditlog) {
        this.auditlog = auditlog;
    };
    BorrowerService.prototype.getAuditLog = function () {
        return this.auditlog;
    };
    BorrowerService.prototype.debugMode = function () {
        return true;
    };
    BorrowerService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], BorrowerService);
    return BorrowerService;
}());
export { BorrowerService };
//# sourceMappingURL=borrower.service.js.map