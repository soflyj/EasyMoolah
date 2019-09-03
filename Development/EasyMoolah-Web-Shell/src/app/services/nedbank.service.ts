import { ApplicationModel } from 'src/app/models/application.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NedbankService {
    public guid: string;
    public application: ApplicationModel;
    public apiUrl: string = environment.appUrl;
    public apiToken: string = environment.apiToken;
    public version: number = environment.version;
    public applicationKey: number;

    constructor(private http: HttpClient) { }

    GetApplication(): ApplicationModel {
        this.application = JSON.parse(window.localStorage.getItem('application'))
        return this.application;
    }

    GetAuthorisationURL(loanAmount: string): string {
        this.GetApplication();
        this.guid = this.application.guid;
        this.applicationKey = this.application.key;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.apiToken,
                'X-Requested-With': 'XMLHttpRequest'
            })
        };

        var formData = new URLSearchParams();
        formData.set('ApplicationKey', this.applicationKey.toString());
        formData.set('LoanAmount', loanAmount);

        this.http.post(this.apiUrl + '/nedbank/authorisationlink', formData.toString() , httpOptions)
            .subscribe(
                (res) => {
                    return JSON.parse(JSON.stringify(res)).Result;
                },
                err => console.log(err)
            );
    }
}