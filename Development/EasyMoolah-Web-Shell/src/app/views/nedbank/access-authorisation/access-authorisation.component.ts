import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { CommonService } from 'src/app/services/common.service';
import { ApplicationAccessModel } from 'src/app/models/application-access.model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-access-authorisation',
  templateUrl: './access-authorisation.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css']
})
export class AccessAuthorisationComponent implements OnInit {

  guid: any;
  currentIP: string;
  private applicationAccess: ApplicationAccessModel = new ApplicationAccessModel();

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private commonService: CommonService,
    private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.guid = params.guid;
    });

    this.applicationAccess = new ApplicationAccessModel();
    this.commonService.UpdateApplicationIP();
  }

  Authorisation() {
    this.router.navigateByUrl('/application/' + this.commonService.GetGUID());
  }
}
