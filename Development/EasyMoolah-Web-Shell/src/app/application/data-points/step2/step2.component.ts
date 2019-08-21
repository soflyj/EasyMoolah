import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],  
  animations: [routerTransition]
})
export class Step2Component implements OnInit {

  Q2: FormGroup;
  URL = false;
  Debug = false;
  StartTime: Date;
  Answer;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(6);

    // this.Answer = this.borrowerService.getPreviousAnswer('q2');

    // // Not allowed to navigate directly to component
    // this.Debug = this.borrowerService.debugMode();
    // this.URL = (window.location.href).includes('/application');
    // if (!this.URL && !this.Debug) {
    //   this.router.navigate(['notfound'], { relativeTo: this.route });
    // }

    // Reactive validation
    this.Q2 = new FormGroup({
      'sub-service': new FormControl(
        this.Answer,
        [Validators.required]),
    });
  }

  Next() {
    this.router.navigateByUrl('/step/3', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/step/-1', { skipLocationChange: true });
  }
}
