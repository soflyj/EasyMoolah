import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css'],
  animations: [routerTransition]
})
export class Q4Component implements OnInit {

  Q4: FormGroup;
  URL = false;
  StartTime: Date;
  temp: BorrowerApplicationLog[];

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

    this.Q4 = new FormGroup({
      'formal-debt-review': new FormControl(
        '',
        [Validators.required]
      ),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Questions', 'Have you applied for or are you under formal debt review?', this.Q4.get('formal-debt-review').value, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q5', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq3', { skipLocationChange: true });
  }
}
