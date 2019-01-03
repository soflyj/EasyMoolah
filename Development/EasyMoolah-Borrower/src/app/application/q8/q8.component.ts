import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q8Component implements OnInit {

  grossincome_slider: string;
  URL = false;
  StartTime: Date;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.grossincome_slider = '50000'; // Default range

    // Not allowed to navigate directly to component
    this.URL = (window.location.href).includes('/application');
    if (!this.URL) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Questions', 'What\'s your gross monthly income?', this.grossincome_slider, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q9', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq7', { skipLocationChange: true });
  }
}
