import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
selector: 'app-q13',
templateUrl: './q13.component.html',
styleUrls: ['./q13.component.css'],
animations: [ routerTransition ]
})
export class Q13Component implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

next() {
this.router.navigateByUrl('/q14', { skipLocationChange: true });
}

back() {
this.router.navigateByUrl('/q12', { skipLocationChange: true });
}}
