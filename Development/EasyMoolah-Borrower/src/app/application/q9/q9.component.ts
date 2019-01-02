import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q9',
  templateUrl: './q9.component.html',
  styleUrls: ['./q9.component.css'],
  animations: [routerTransition]
})
export class Q9Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q10', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq8', { skipLocationChange: true });
  }
}
