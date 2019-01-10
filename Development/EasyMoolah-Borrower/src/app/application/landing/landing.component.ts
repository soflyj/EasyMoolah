import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid'
import { BorrowerService } from 'src/app/service/borrower.service';
import { AuditLog } from 'src/app/model/auditlog.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css']
})
export class LandingComponent implements OnInit {

  GUID: string;
  AuditLog: AuditLog;
  IP: string;

  constructor(private borrowerService: BorrowerService, ) { }

  ngOnInit() {
    this.GUID = UUID.UUID(); // Generate GUID
    this.IP = window.location.origin // this will give you the ip:port

    this.AuditLog.SessionGUID = this.GUID;
    this.AuditLog.IPAddress = this.IP;

    this.borrowerService.addToAuditLog(this.AuditLog);
  }
}