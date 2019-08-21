import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',  
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step1Component implements OnInit {
  [x: string]: any;

  Q1: FormGroup;
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
    this.headerService.progress.next(0);

    // this.Answer = this.borrowerService.getPreviousAnswer('q1');

    // this.StartTime = new Date();

    // // Not allowed to navigate directly to component
    // this.Debug = this.borrowerService.debugMode();
    // this.URL = (window.location.href).includes('/application');
    // if (!this.URL && !this.Debug) {
    //   this.router.navigate(['notfound'], { relativeTo: this.route });
    // }

    // Reactive validation
    this.Q1 = new FormGroup({
      'service': new FormControl(
        this.Answer,
        [Validators.required]),
    });
  }

  Next() {    
    this.router.navigateByUrl('/step/2', { skipLocationChange: true });
  }
}
