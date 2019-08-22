import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { DataPointModel } from '../../../models/data-point.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step6Component implements OnInit {

  Q6: FormGroup;
  URL = false;
  StartTime: Date;
  Debug = false;
  credit_check: boolean;
  Answer: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService) { }

  ngOnInit() {
    // this.StartTime = new Date();
    // this.headerService.mode.next('determinate');
    // this.headerService.progress.next(30);

    // this.Answer = this.borrowerService.getPreviousAnswer('q6') != null ? JSON.parse(this.borrowerService.getPreviousAnswer('q6')) : false;

    // // Not allowed to navigate directly to component
    // this.Debug = this.borrowerService.debugMode();
    // this.URL = (window.location.href).includes('/application');
    // if (!this.URL && !this.Debug) {
    //   this.router.navigate(['notfound'], { relativeTo: this.route });
    // }

    // Reactive validation
    this.Q6 = new FormGroup({
      'credit_check': new FormControl(
        '',
        [Validators.required]),
    });

    this.credit_check = this.Answer;
  }

  Next() {
    this.router.navigateByUrl('/q7', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq5', { skipLocationChange: true });
  }
}
