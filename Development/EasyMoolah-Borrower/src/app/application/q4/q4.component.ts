import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css'],
  animations: [ routerTransition ]
})
export class Q4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q5', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq3', { skipLocationChange: true });
  }
}
