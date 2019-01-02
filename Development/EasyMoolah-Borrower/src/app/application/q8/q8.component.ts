import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['./q8.component.css'],
  animations: [ routerTransition ]
})
export class Q8Component implements OnInit {
  value = 0;
  options: Options = {
    floor: 0,
    ceil: 200,
    step: 10
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q9', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq7', { skipLocationChange: true });
  }
}
