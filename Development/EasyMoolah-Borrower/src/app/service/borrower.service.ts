import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { BorrowerApplicationLog } from '../model/borrowerapplicationLog.model';
import { Question } from '../model/question.model';
import { AuditLog } from '../model/auditlog.model';
import { PersonalDetails } from '../model/personalDetails.model';

@Injectable()
export class BorrowerService {

    constructor() {

    }

    public borrowerapplicationlog: BorrowerApplicationLog[] = [null];
    public question: Question[] = [null];
    public auditlog: AuditLog = null;
    public personaldetails: PersonalDetails = null;


    addBorrowerApplicationLog(borrowerapplicationlog: BorrowerApplicationLog) {

        this.borrowerapplicationlog.push(borrowerapplicationlog);
        // Test
        console.log(this.getBorrowerApplicationLog());
    }

    getBorrowerApplicationLog() {
        return this.borrowerapplicationlog;
    }

    addToQuestionLog(question: Question) {
        this.question.push(question);
    }

    addToPersonalDetails(persondetails: PersonalDetails) {
        this.personaldetails = persondetails;
    }

    getToPersonalDetails() {
        return this.personaldetails;
    }

    addAuditLog(auditlog: AuditLog) {
        this.auditlog = auditlog;
    }

    getAuditLog() {
        return this.auditlog;
    }

    debugMode() {
        return true;
    }
}
