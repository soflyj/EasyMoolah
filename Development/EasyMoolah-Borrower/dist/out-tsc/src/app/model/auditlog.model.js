var AuditLog = /** @class */ (function () {
    function AuditLog(sessionGUID, ipAddress, xml, startTime, endTime) {
        this.SessionGUID = sessionGUID;
        this.IPAddress = ipAddress;
        this.XML = xml;
        this.StartTime = startTime;
        this.EndTime = endTime;
    }
    return AuditLog;
}());
export { AuditLog };
//# sourceMappingURL=auditlog.model.js.map