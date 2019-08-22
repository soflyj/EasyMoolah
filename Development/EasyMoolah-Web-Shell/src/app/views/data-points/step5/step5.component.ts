import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { DataPointModel } from '../../../models/data-point.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step5Component implements OnInit {

  Q5: FormGroup;
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
    // this.headerService.progress.next(24);

    // this.Answer = this.borrowerService.getPreviousAnswer('q5');

    // // Not allowed to navigate directly to component
    // this.Debug = this.borrowerService.debugMode();
    // this.URL = (window.location.href).includes('/application');
    // if (!this.URL && !this.Debug) {
    //   this.router.navigate(['notfound'], { relativeTo: this.route });
    // }

    // // Reactive validation
    // this.Q5 = new FormGroup({
    //   'insolvent': new FormControl(
    //     this.Answer,
    //     [Validators.required]),
    // });
  }

  Next() {
    this.router.navigateByUrl('/step/6', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/step/-4', { skipLocationChange: true });
  }
}
