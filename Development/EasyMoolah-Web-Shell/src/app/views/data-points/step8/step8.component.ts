import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { DataPointModel } from '../../../models/data-point.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step8Component implements OnInit {

  Q8: FormGroup;
  grossincome_slider: string;
  URL = false;
  Debug = false;
  StartTime: Date;
  Answer;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService) { }
  ngOnInit() {
    // this.StartTime = new Date();
    // this.headerService.mode.next('determinate');
    // this.headerService.progress.next(42);
    // this.grossincome_slider = '50000'; // Default range

    // this.Answer = this.borrowerService.getPreviousAnswer('q8')

    // if (this.Answer != undefined) {
    //   this.grossincome_slider = this.Answer.toString();
    // }

    // // Not allowed to navigate directly to component
    // this.Debug = this.borrowerService.debugMode();
    // this.URL = (window.location.href).includes('/application');
    // if (!this.URL && !this.Debug) {
    //   this.router.navigate(['notfound'], { relativeTo: this.route });
    // }

    // Reactive validation
    this.Q8 = new FormGroup({
      'grossincome_slider': new FormControl(
        this.grossincome_slider,
        [Validators.required])
    });

  }

  Next() {
    this.router.navigateByUrl('/q9', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq7', { skipLocationChange: true });
  }
}
