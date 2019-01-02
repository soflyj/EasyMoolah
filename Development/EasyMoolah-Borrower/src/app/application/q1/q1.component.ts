import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css'],
  animations: [ routerTransition ]
})
export class Q1Component implements OnInit {

  Q1: FormGroup;
  URL = false;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Not allowed to navigate directly to component
    this.URL = (window.location.href).includes('/application');
    if (!this.URL) {
      this.router.navigate(['notfound'], {relativeTo: this.route});
    }

    this.Q1 = new FormGroup({
      'service': new FormControl(
        '',
        [Validators.required]
      ),
    });
  }

  Next() {
    this.router.navigateByUrl('/q2', { skipLocationChange: true });
    console.log(this.Q1.get('service').value);
  }

  // back() {
  //   this.router.navigateByUrl('/q2', { skipLocationChange: true });
  // }
}
