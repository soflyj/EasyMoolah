import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q10',
  templateUrl: './q10.component.html',
  styleUrls: ['./q10.component.css'],
  animations: [routerTransition]
})
export class Q10Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q11', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq9', { skipLocationChange: true });
  }
}
