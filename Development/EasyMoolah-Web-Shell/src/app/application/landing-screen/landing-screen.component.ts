import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {

  GUID: string;
  IP: string;
  StartTime: Date;
  obj: any;

  constructor(private headerService: HeaderService) {
    //super();
  }

  sendEvent = (value: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: value + 'Category',
      eventLabel: value + 'Label',
      eventAction: value + 'Action',
      eventValue: 10
    });
  }

  ngOnInit() {
    this.headerService.mode.next('determinate');

    this.StartTime = new Date();
    this.GUID = UUID.UUID(); // Generate GUID
    this.IP = window.location.origin; // this will give you the ip:port


    // TODO: Insert to the Application table    
  }
}
