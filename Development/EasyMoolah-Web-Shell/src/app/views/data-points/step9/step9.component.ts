import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { DataPointModel } from '../../../models/data-point.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step9Component implements OnInit {

  Q9: FormGroup;
  nettincome_slider: string;
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
    // this.headerService.progress.next(48);
    // this.nettincome_slider = '50000'; // Default range

    // this.Answer = this.borrowerService.getPreviousAnswer('q9');

    // if (this.Answer != undefined) {
    //   this.nettincome_slider = this.Answer.toString();
    // }

    // // Not allowed to navigate directly to component
    // this.Debug = this.borrowerService.debugMode();
    // this.URL = (window.location.href).includes('/application');
    // if (!this.URL && !this.Debug) {
    //   this.router.navigate(['notfound'], { relativeTo: this.route });
    // }

    // Reactive validation
    this.Q9 = new FormGroup({
      'nettincome_slider': new FormControl(
        this.nettincome_slider,
        [Validators.required])
    });

  }

  Next() {
    this.router.navigateByUrl('/q10', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq8', { skipLocationChange: true });
  }
}
