import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { BorrowerApplicationLog } from '../model/borrowerapplicationLog.model';

@Injectable()
export class BorrowerService {

    constructor() {

    }

    public borrowerapplicationlog: BorrowerApplicationLog[] = [null];

    addBorrowerApplicationLog(borrowerapplicationlog: BorrowerApplicationLog) {

        this.borrowerapplicationlog.push(borrowerapplicationlog);
        // Test
        console.log(this.getBorrowerApplicationLog());
    }

    getBorrowerApplicationLog() {
        return this.borrowerapplicationlog;
    }
}
