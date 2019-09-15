import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataPointModel } from '../models/data-point.model';
import { CommonService } from '../services/common.service';
import { ApplicationAuditModel } from 'src/app/models/application-audit.model'

@Injectable()
export class DataPointService {
    public dataPoints: Array<DataPointModel>;
    public Answer: string[] = null;
    private applicationAudit: ApplicationAuditModel = new ApplicationAuditModel();

    constructor(private commonService: CommonService) {

    }

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
        var action = '';

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

        this.applicationAudit.action = '';
        this.applicationAudit.formData = JSON.stringify(this.dataPoints);
        this.commonService.UpdateFormData(this.applicationAudit)
            .subscribe(
                (res) => {
                    console.log(res);
                },
                err => console.log(err)
            );
    }

    getPreviousDataPointState(id: number): string[] {
        if (this.dataPoints != undefined) {
            if (this.dataPoints.filter(q => q.Id == id)[0] != null) {
                // if (id != 14 && id != 15) {
                //     this.Answer = this.dataPoints.filter(q => q.Id === id)[0].Answer.toString();
                // }
                // else {
                this.Answer = this.dataPoints.filter(q => q.Id === id)[0].Answer;
                // }
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
