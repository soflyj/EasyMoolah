import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { BorrowerService } from 'src/app/service/borrower.service';
import { AuditLog } from 'src/app/model/auditlog.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css']
})
export class LandingComponent implements OnInit {

  GUID: string;
  IP: string;
  StartTime: Date;
  js2xmlparser: any;
  obj: any;

  constructor(private borrowerService: BorrowerService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.GUID = UUID.UUID(); // Generate GUID
    this.IP = window.location.origin; // this will give you the ip:port

    this.borrowerService.addAuditLog(new AuditLog(this.GUID, this.IP, '', this.StartTime.toString(), ''));
    console.log(this.borrowerService.getAuditLog());

    this.js2xmlparser = require('js2xmlparser');

    this.obj = '{"Name": "Jarrod"}';
    console.log(this.js2xmlparser.parse('Person', this.obj));
  }
}
