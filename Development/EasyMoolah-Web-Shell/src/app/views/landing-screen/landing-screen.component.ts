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

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css']
})
export class LandingScreenComponent implements OnInit {

  private guid: string;
  private ip: string;
  private startTime: Date;
  private applicationApplicationAccess: ApplicationApplicationAccessModel = new ApplicationApplicationAccessModel();
  deviceInfo = null;

  constructor(private router: Router,
    private headerService: HeaderService,
    private commonService: CommonService,
    private nedbankSerivce: NedbankService,
    private deviceService: DeviceDetectorService) {
    //super();
  }

  ngOnInit() {
    this.headerService.mode.next('determinate');
    // Application    
    this.applicationApplicationAccess.application = new ApplicationModel();
    this.applicationApplicationAccess.application.guid = UUID.UUID(); // Generate GUID    
    this.applicationApplicationAccess.application.startDate = new Date();
    this.applicationApplicationAccess.application.version = environment.version.toString();    
    this.applicationApplicationAccess.application.formData = '';
    this.applicationApplicationAccess.application.isActive = true;
    this.applicationApplicationAccess.application.createdDate = new Date();
    this.applicationApplicationAccess.application.changedDate = new Date();
    // Application Access
    this.applicationApplicationAccess.applicationAccess = new ApplicationAccessModel();
    this.applicationApplicationAccess.applicationAccess.browser = ''; // JSON.stringify(this.deviceService.getDeviceInfo()).toString(); // npm install ngx-device-detector --save
    this.applicationApplicationAccess.applicationAccess.ipAddress = window.location.origin.toString();
    this.applicationApplicationAccess.applicationAccess.startDate = new Date();
    this.applicationApplicationAccess.applicationAccess.isActive = true;
    this.applicationApplicationAccess.applicationAccess.createdDate = new Date();
    this.applicationApplicationAccess.applicationAccess.changedDate = new Date();

    this.commonService.SetApplication(this.applicationApplicationAccess)
      .subscribe(
        (res) => {
          this.applicationApplicationAccess.application.key = JSON.parse(JSON.stringify(res)).Result.Key;
          window.localStorage.setItem('application', JSON.stringify(this.applicationApplicationAccess.application));
         // const URL = this.nedbankSerivce.GetAuthorisationURL('5000');
        },
        err => console.log(err)
      );
    
    console.log(this.applicationApplicationAccess.application);
    // TODO: Insert to the Application table    
  }

  Begin() {
    this.router.navigateByUrl('/application/' + this.commonService.GetGUID());
  }
}
