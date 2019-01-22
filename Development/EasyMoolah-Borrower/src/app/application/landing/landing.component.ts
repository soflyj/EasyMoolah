import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { BorrowerService } from 'src/app/service/borrower.service';
import { AuditLog } from 'src/app/model/auditlog.model';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css']
})
export class LandingComponent implements OnInit {

  GUID: string;
  IP: string;
  StartTime: Date;
  obj: any;

  constructor(private borrowerService: BorrowerService, private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.mode.next('determinate');

    this.StartTime = new Date();
    this.GUID = UUID.UUID(); // Generate GUID
    this.IP = window.location.origin; // this will give you the ip:port


    this.borrowerService.addAuditLog(new AuditLog(this.GUID, this.IP, '', this.StartTime.toString(), ''));
    console.log(this.borrowerService.getAuditLog());
  }
}
