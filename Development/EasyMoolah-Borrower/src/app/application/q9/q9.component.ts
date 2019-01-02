import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q9',
  templateUrl: './q9.component.html',
  styleUrls: ['./q9.component.css'],
  animations: [ routerTransition ]
})
export class Q9Component implements OnInit {

  nettincome_slider: string;
  URL = false;
  StartTime: Date;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.nettincome_slider = '50000'; // Default range

    // Not allowed to navigate directly to component
    this.URL = (window.location.href).includes('/application');
    if (!this.URL) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Questions', 'What\'s your nett monthly income?', this.nettincome_slider, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q10', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq8', { skipLocationChange: true });
  }
}
