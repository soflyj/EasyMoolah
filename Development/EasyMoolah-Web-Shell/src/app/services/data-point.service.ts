import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataPointModel } from '../models/data-point.model';

@Injectable()
export class DataPointService {
    public dataPoints: Array<DataPointModel>;
    public Answer: any;
    // constructor() {

    // }

    // public borrowerapplicationlog: BorrowerApplicationLog[] = [null];
     
    // public auditlog: AuditLog = null;
    // private debug: boolean = environment.debug;

    // addBorrowerApplicationLog(borrowerapplicationlog: BorrowerApplicationLog) {

    //     this.borrowerapplicationlog.push(borrowerapplicationlog);
    //     // Test
    //     console.log(this.getBorrowerApplicationLog());
    // }

    // getBorrowerApplicationLog() {
    //     return this.borrowerapplicationlog;
    // }

    addDataPoint(dataPoint: DataPointModel) {
        if (this.dataPoints == null) {
            this.dataPoints = new Array<DataPointModel>();
            //First question to Add, datapoint 1
            this.dataPoints.push(dataPoint);            
        }
        else {
            if (this.dataPoints.filter(x => x.Id == dataPoint.Id)[0] != null) {
                //Update
                this.dataPoints.filter(x => x.Id == dataPoint.Id)[0].Answer = dataPoint.Answer;
            }
            else {
                //Add
                this.dataPoints.push(dataPoint);
            }
        }        
    }

    getPreviousDataPointState(id: number) {
        if (this.dataPoints != undefined) {
            if (this.dataPoints.filter(q => q.Id == id)[0] != null) {
                if (id != 14 && id != 15) {
                    this.Answer = this.dataPoints.filter(q => q.Id === id)[0].Answer.toString();
                }
                else {
                    this.Answer = this.dataPoints.filter(q => q.Id === id)[0].Answer.toString();
                }
            }
            else {
                this.Answer = null; 
            }
        }
        return this.Answer;
    }

    // debugMode() {
    //     return this.debug;
    // }
}
