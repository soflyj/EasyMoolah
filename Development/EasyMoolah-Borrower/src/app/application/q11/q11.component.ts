import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
selector: 'app-q11',
templateUrl: './q11.component.html',
styleUrls: ['./q11.component.css'],
animations: [ routerTransition ]
})
export class Q11Component implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

next() {
this.router.navigateByUrl('/q12', { skipLocationChange: true });
}

back() {
this.router.navigateByUrl('/q10', { skipLocationChange: true });
}}
