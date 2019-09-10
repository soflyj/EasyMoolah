import { ApplicationApplicationAccessModel } from 'src/app/models/shared/application-application-access.model';
import { ApplicationModel } from 'src/app/models/application.model';
import { ApplicationAccessModel } from 'src/app/models/application-access.model';
import { ApplicantModel } from 'src/app/models/applicant.model';
import { ApplicationAuditModel } from 'src/app/models/application-audit.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';



// /** @description Common functions for angular services. */
// @Injectable({
//   providedIn: 'root'
// })

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    public guid: string;
    public applicationKey: number;
    public application: ApplicationModel;
    public applicationApplicationAccess: ApplicationApplicationAccessModel;
    public applicationAccess: ApplicationAccessModel;
    public applicationAudit: ApplicationAuditModel;
    public applicant: ApplicantModel;
    public apiUrl: string = environment.appUrl;
    public apiToken: string = environment.apiToken;
    public version: number = environment.version;
    // public http: HttpClient;

    constructor(private http: HttpClient,
        private deviceService: DeviceDetectorService, ) { }

    GetGUID(): string {
        this.application = JSON.parse(window.localStorage.getItem('application'))
        return this.applicationApplicationAccess.application.guid;
    }

    GetApplicationKey(): number {
        this.application = JSON.parse(window.localStorage.getItem('application'))
        return this.application.key;
    }

    SaveApplication(applicationApplicationAccess: ApplicationApplicationAccessModel): Observable<ApplicationModel> {
        this.applicationApplicationAccess = applicationApplicationAccess;
        this.applicationApplicationAccess.applicationAccess.browser = JSON.stringify(this.deviceService.getDeviceInfo()).toString();

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer ' + this.apiToken,
                'X-Requested-With': 'XMLHttpRequest'
            })
        };

        return this.http.post<ApplicationModel>(this.apiUrl + '/application/save', JSON.stringify(this.applicationApplicationAccess), httpOptions)
        // .subscribe(
        //     (res) => {
        //         application.key = res.Result.Key;
        //         window.localStorage.setItem('application', JSON.stringify(application));
        //     },
        //     err => console.log(err)
        // );
    }

    SaveApplicant(applicant: ApplicantModel): Observable<ApplicantModel> {
        this.applicant = applicant;
        this.applicant.applicationKey = this.GetApplicationKey();
        this.applicant.isActive = true;
        this.applicant.createdDate = new Date;
        this.applicant.changedDate = new Date;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer ' + this.apiToken,
                'X-Requested-With': 'XMLHttpRequest'
            })
        };

        return this.http.post<ApplicantModel>(this.apiUrl + '/applicant/save', JSON.stringify(this.applicant), httpOptions)
    }

    GetApplicationByKey(applicationKey: number): Observable<ApplicationModel> {

        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type': 'application/json',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer ' + this.apiToken,
                'X-Requested-With': 'XMLHttpRequest'
            })
        };

        return this.http.get<ApplicationModel>(this.apiUrl + '/applicant/save/' + applicationKey.toString(), httpOptions)
    }

    UpdateApplicationIP() {
        var response: any;        
        this.applicationAccess.applicationKey = this.GetApplicationKey();
        this.applicationAccess.browser = JSON.stringify(this.deviceService.getDeviceInfo()).toString();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer ' + this.apiToken,
                'X-Requested-With': 'XMLHttpRequest'
            })
        };

        this.http.get<{ ip: string }>('https://jsonip.com')
            .subscribe(data => {
                this.applicationAccess.ipAddress = data.ip;
                response = this.http.post<ApplicationAccessModel>(this.apiUrl + '/applicationip/save', JSON.stringify(this.applicationAccess), httpOptions)
            })
    }

    UpdateFormData(formData: ApplicationAuditModel): Observable<ApplicationAuditModel> {
        this.applicationAudit = formData;
        this.applicationAudit.applicationKey = this.GetApplicationKey();
        this.applicationAudit.dateStamp = new Date();

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer ' + this.apiToken,
                'X-Requested-With': 'XMLHttpRequest'
            })
        };

        return this.http.put<ApplicationAuditModel>(this.apiUrl + '/applicationformdata/update', JSON.stringify(this.applicationAudit), httpOptions)
    }
}
