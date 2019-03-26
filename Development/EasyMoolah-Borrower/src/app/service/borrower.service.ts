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
    public Question: Question[];
    public auditlog: AuditLog = null;
    public personaldetails: PersonalDetails = null;
    public Answer;

    addBorrowerApplicationLog(borrowerapplicationlog: BorrowerApplicationLog) {

        this.borrowerapplicationlog.push(borrowerapplicationlog);
        // Test
        console.log(this.getBorrowerApplicationLog());
    }

    getBorrowerApplicationLog() {
        return this.borrowerapplicationlog;
    }

    addToQuestionLog(question: Question) {
        if (this.Question == null) {
            //First question to Add, q1
            this.Question = [new Question(question.Id, question.Stage, question.Question, question.Answer, question.StartTime, question.EndTime)];
            console.log('Answer to ' + question.Id + ': ' + question.Answer);
        }
        else {
            if (this.Question.Where(x => x.Id == question.Id).FirstOrDefault() != null) {
                //Update
                this.Question.Where(x => x.Id == question.Id).FirstOrDefault().Answer = question.Answer;
            }
            else {
                //Add
                this.Question.push(question);
            }
        }
        console.log(this.Question);
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

    getPreviousAnswer(id: string) {
        if (this.Question != undefined) {
            if (this.Question.Where(q => q.Id == id).FirstOrDefault() != null) {
                if (id != 'q14' && id != 'q15') {
                    this.Answer = this.Question.Where(q => q.Id === id).Select(s => s.Answer).toString();
                }
                else {
                    this.Answer = this.Question.Where(q => q.Id === id).Select(s => s.Answer);
                }
                console.log('Answer to ' + id + ': ');
                console.log(this.Answer);
            }
            else {
                this.Answer = null; 
            }
        }

        return this.Answer;
    }

    debugMode() {
        return false;
    }
}
