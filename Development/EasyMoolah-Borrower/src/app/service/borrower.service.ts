import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { BorrowerApplicationLog } from '../model/borrowerapplicationLog.model';
import { Question } from '../model/question.model';
import { AuditLog } from '../model/auditlog.model';
import { PersonalDetails } from '../model/personalDetails.model';
import { isNull } from 'util';

@Injectable()
export class BorrowerService {

    constructor() {

    }

    public borrowerapplicationlog: BorrowerApplicationLog[] = [null];
    public question: Question[] = [null];
    public auditlog: AuditLog = null;
    public personaldetails: PersonalDetails = null;
    public Answer: string = '';


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
        console.log(this.question);
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

    getPreviousAnswer(id: string)
    {
        if(!isNull(this.question[0])){        
            this.Answer = this.question.Where(q => q.Id === id).Select(s => s.Answer).toString();        
            console.log('Answer to '+ id + ': ' + this.Answer);
        }        

        return this.Answer;
    }    

    debugMode() {
        return true;
    }
}
