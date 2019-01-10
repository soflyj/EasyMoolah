import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(headerService: HeaderService) { }

  ngOnInit() {
    // this.subscription = this.headerService.getProgressValue()
    // .subscribe(item => this.onMain=item);
  }

}
