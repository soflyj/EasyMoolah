import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q5Component implements OnInit {

  Q5: FormGroup;
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

    this.Q5 = new FormGroup({
      'insolvent': new FormControl(
        '',
        [Validators.required]
      ),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Questions', 'Have you applied for or been declared insolvent?', this.Q5.get('insolvent').value, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q6', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/q4', { skipLocationChange: true });
  }
}
