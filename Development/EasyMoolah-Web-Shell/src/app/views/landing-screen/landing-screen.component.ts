import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { HeaderService } from '../../services/header.service';
import { Router } from '@angular/router';
import { ApplicationModel } from 'src/app/models/application.model';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

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

  constructor(private router: Router,
    private headerService: HeaderService,
    private commonService: CommonService) {
    //super();
  }

  ngOnInit() {
    this.headerService.mode.next('determinate');

    this.application.guid = UUID.UUID(); // Generate GUID
    this.application.browser = ''; // npm install ngx-device-detector --save
    this.application.startDate = new Date();
    this.application.version = environment.version.toString();
    this.application.iPAddress = window.location.origin.toString();
    this.application.formData = '';
    this.application.createdDate = new Date();
    this.application.changedDate = new Date();

    this.commonService.SetApplication(this.application);
    console.log(this.application);
    // TODO: Insert to the Application table    
  }

  Begin() {
    this.router.navigateByUrl('/application/' + this.commonService.GetGUID());
  }
}
