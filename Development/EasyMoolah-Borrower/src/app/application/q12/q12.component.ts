import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
@Component({
selector: 'app-q12',
templateUrl: './q12.component.html',
styleUrls: ['./q12.component.css'],
animations: [ routerTransition ]
})
export class Q12Component implements OnInit {

constructor(private router: Router) { }

ngOnInit() {
}

next() {
this.router.navigateByUrl('/q13', { skipLocationChange: true });
}

back() {
this.router.navigateByUrl('/q11', { skipLocationChange: true });
}}
