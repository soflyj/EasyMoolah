import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { HeaderService } from '../../services/header.service';
import { Router } from '@angular/router';
import { ApplicationModel } from 'src/app/models/application.model'
import { ApplicationAccessModel } from 'src/app/models/application-access.model'
import { ApplicationApplicationAccessModel } from 'src/app/models/shared/application-application-access.model'
import { CommonService } from 'src/app/services/common.service';
import { NedbankService } from 'src/app/services/nedbank.service';
import { environment } from 'src/environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css']
})
export class LandingScreenComponent implements OnInit {

  private guid: string;
  ip: string = '';
  private startTime: Date;  
  deviceInfo = null;

  constructor(private router: Router,
    private headerService: HeaderService,
    private commonService: CommonService,
    private nedbankSerivce: NedbankService,
    private deviceService: DeviceDetectorService,
    private http: HttpClient) {
    //super();
  }

  ngOnInit() {
    this.headerService.mode.next('determinate');

  this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      console.log('th data', data);
      this.ip = data.ip
    })   
  }

  Begin() {

    const applicationApplicationAccess = new ApplicationApplicationAccessModel();
    // Application    
    applicationApplicationAccess.application = new ApplicationModel();
    applicationApplicationAccess.application.guid = UUID.UUID(); // Generate GUID    
    applicationApplicationAccess.application.startDate = new Date();
    applicationApplicationAccess.application.version = environment.version.toString();    
    applicationApplicationAccess.application.formData = '';
    applicationApplicationAccess.application.isActive = true;
    applicationApplicationAccess.application.createdDate = new Date();
    applicationApplicationAccess.application.changedDate = new Date();
    // Application Access
    applicationApplicationAccess.applicationAccess = new ApplicationAccessModel();
    applicationApplicationAccess.applicationAccess.browser = JSON.stringify(this.deviceService.getDeviceInfo()).toString(); // npm install ngx-device-detector --save
    applicationApplicationAccess.applicationAccess.ipAddress = this.ip;
    applicationApplicationAccess.applicationAccess.startDate = new Date();
    applicationApplicationAccess.applicationAccess.isActive = true;
    applicationApplicationAccess.applicationAccess.createdDate = new Date();
    applicationApplicationAccess.applicationAccess.changedDate = new Date();

    this.commonService.SaveApplication(applicationApplicationAccess)
      .subscribe(
        (res) => {
          applicationApplicationAccess.application.key = JSON.parse(JSON.stringify(res)).Result.Key;
          window.localStorage.setItem('application', JSON.stringify(applicationApplicationAccess.application));

          this.router.navigateByUrl('/application/' + this.commonService.GetGUID());
        },
        err => console.log(err)
      );    
  }
}
