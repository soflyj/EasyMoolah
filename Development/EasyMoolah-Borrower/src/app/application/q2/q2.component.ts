import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css'],
  animations: [ routerTransition ]
})
export class Q2Component implements OnInit {

  URL = false;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
        // Not allowed to navigate directly to component
        this.URL = (window.location.href).includes('/application');
        if (!this.URL) {
          this.router.navigate(['notfound'], {relativeTo: this.route});
        }
  }

  next() {
    this.router.navigateByUrl('/q3', { skipLocationChange: true });
  }

  back() {
    this.router.navigateByUrl('/q1', { skipLocationChange: true });
  }
}
