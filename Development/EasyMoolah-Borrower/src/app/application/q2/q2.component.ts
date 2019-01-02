import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css'],
  animations: [ routerTransition ]
})
export class Q2Component implements OnInit {

  Q2: FormGroup;
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

      this.Q2 = new FormGroup({
        'sub-service': new FormControl(
          '',
          [Validators.required]
        ),
      });
    }

    Next() {
      // tslint:disable-next-line:max-line-length
       this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Question', 'What type of automobile repair?', this.Q2.get('sub-service').value, this.StartTime.toString(), (new Date).toString()));

      this.router.navigateByUrl('/q3', { skipLocationChange: true });
    }

  Back() {
    this.router.navigateByUrl('/bq1', { skipLocationChange: true });
  }
}
