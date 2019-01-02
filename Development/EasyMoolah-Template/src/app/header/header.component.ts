import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  gotoContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

  gotoAbout() {
    this.router.navigate(['about'], {relativeTo: this.route});
  }

  gotoHome() {
    this.router.navigate([''], {relativeTo: this.route});
  }
}
