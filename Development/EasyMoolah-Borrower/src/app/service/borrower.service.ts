import { Injectable } from '@angular/core';
import { BorrowerApplicationLog } from '../model/borrowerapplicationLog.model';

@Injectable()
export class BorrowerService {
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