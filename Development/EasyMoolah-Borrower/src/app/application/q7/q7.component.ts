import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.css'],
  animations: [ routerTransition ]
})
export class Q7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q8', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq6', { skipLocationChange: true });
  }
}
