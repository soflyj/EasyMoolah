import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
selector: 'app-q16',
templateUrl: './q16.component.html',
styleUrls: ['./q16.component.css'],
animations: [ routerTransition ]
})
export class Q16Component implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

next() {
this.router.navigateByUrl('/q17', { skipLocationChange: true });
}

back() {
this.router.navigateByUrl('/q15', { skipLocationChange: true });
}}
