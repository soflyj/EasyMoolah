import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.css'],
  animations: [ routerTransition ]
})
export class Q5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/q6', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/bq4', { skipLocationChange: true });
  }
}
