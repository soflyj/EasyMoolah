import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.css'],
  animations: [ routerTransition ]
})
export class Q6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q7', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq5', { skipLocationChange: true });
  }
}
