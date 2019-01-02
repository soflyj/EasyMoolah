import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
selector: 'app-q14',
templateUrl: './q14.component.html',
styleUrls: ['./q14.component.css'],
animations: [ routerTransition ]
})
export class Q14Component implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

next() {
this.router.navigateByUrl('/q15', { skipLocationChange: true });
}

back() {
this.router.navigateByUrl('/bq13', { skipLocationChange: true });
}}
