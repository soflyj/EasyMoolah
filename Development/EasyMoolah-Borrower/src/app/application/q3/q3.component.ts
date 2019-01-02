import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css'],
  animations: [ routerTransition ]
})
export class Q3Component implements OnInit {

  borrowamount_slider: string;
  URL = false;
  StartTime: Date;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.borrowamount_slider = '50000'; // Default range

    // Not allowed to navigate directly to component
    this.URL = (window.location.href).includes('/application');
    if (!this.URL) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Questions', 'How much do you want to borrow?', this.borrowamount_slider, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q4', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq2', { skipLocationChange: true });
  }
}
