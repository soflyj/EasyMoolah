import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.css'],
  animations: [routerTransition]
})
export class Q6Component implements OnInit {

  URL = false;
  StartTime: Date;
  temp: string;
  credit_check: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.credit_check = false;

    // Not allowed to navigate directly to component
    this.URL = (window.location.href).includes('/application');
    if (!this.URL) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Questions', 'I give permission for EasyMoolah to do a credit check.', this.credit_check + '', this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q7', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq5', { skipLocationChange: true });
  }
}
