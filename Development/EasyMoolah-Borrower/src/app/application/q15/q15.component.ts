import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
selector: 'app-q15',
templateUrl: './q15.component.html',
styleUrls: ['./q15.component.css'],
animations: [ routerTransition ]
})
export class Q15Component implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

next() {
this.router.navigateByUrl('/q16', { skipLocationChange: true });
}

back() {
this.router.navigateByUrl('/q14', { skipLocationChange: true });
}}
