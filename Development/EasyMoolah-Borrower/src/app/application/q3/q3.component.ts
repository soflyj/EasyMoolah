import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css'],
  animations: [ routerTransition ]
})
export class Q3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q4', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq2', { skipLocationChange: true });
  }
}
