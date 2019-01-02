import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';


@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css'],
  animations: [routerTransition]
})
export class Q1Component implements OnInit {

  Q1: FormGroup;
  URL = false;
  StartTime: Date;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService) { }

  ngOnInit() {
    this.StartTime = new Date();

    // Not allowed to navigate directly to component
    this.URL = (window.location.href).includes('/application');
    if (!this.URL) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    this.Q1 = new FormGroup({
      'service': new FormControl(
        '',
        [Validators.required]
      ),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.borrowerapplicationlog = [new BorrowerApplicationLog('Questions', 'Which service would you like a loan for?', this.Q1.get('service').value, this.StartTime.toString(), (new Date).toString())];    

    this.router.navigateByUrl('/q2', { skipLocationChange: true });
  }

  // back() {
  //   this.router.navigateByUrl('/q2', { skipLocationChange: true });
  // }
}
