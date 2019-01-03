import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q11',
  templateUrl: './q11.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q11Component implements OnInit {

  Q11: FormGroup;
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

    this.Q11 = new FormGroup({
      'bank': new FormControl(
        '',
        [Validators.required]
      ),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Question', 'With which bank do you have an account?', this.Q11.get('bank').value, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q12', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq10', { skipLocationChange: true });
  }
}
