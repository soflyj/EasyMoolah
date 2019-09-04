import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { HeaderService } from '../../services/header.service';
import { Router } from '@angular/router';
import { ApplicationModel } from 'src/app/models/application.model';
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
  private application: ApplicationModel = new ApplicationModel();
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

    this.application.key = 0; // default
    this.application.guid = UUID.UUID(); // Generate GUID
    this.application.browser = this.deviceService.getDeviceInfo().toString(); // npm install ngx-device-detector --save
    this.application.startDate = new Date();
    this.application.version = environment.version.toString();
    this.application.ipAddress = window.location.origin.toString();
    this.application.formData = '';
    this.application.createdDate = new Date();
    this.application.changedDate = new Date();

    this.commonService.SetApplication(this.application)
      .subscribe(
        (res) => {
          this.application.key = JSON.parse(JSON.stringify(res)).Result.Key;
          window.localStorage.setItem('application', JSON.stringify(this.application));
         // const URL = this.nedbankSerivce.GetAuthorisationURL('5000');
        },
        err => console.log(err)
      );
    
    console.log(this.application);
    // TODO: Insert to the Application table    
  }

  Begin() {
    this.router.navigateByUrl('/application/' + this.commonService.GetGUID());
  }
}
