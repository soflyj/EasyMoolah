import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPointModel } from 'src/app/models/data-point.model';
import { DataPointService } from 'src/app/services/data-point.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step2Component implements OnInit {

  private stepForm: FormGroup;
  private dataPoint: DataPointModel = new DataPointModel();
  private question: string;
  private answer: string = null;
  private jar: any;
  private startTime

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private dataPointService: DataPointService,
    private commonService: CommonService) {
    this.question = 'What type of home renovation?';
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.jar = params.jar;
    });
    this.startTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(6);

    if (this.dataPointService.getPreviousDataPointState(2) != null) {
      this.answer = this.dataPointService.getPreviousDataPointState(2)[0];
    }

    if (this.jar != this.commonService.GetGUID()) {
      this.router.navigate(['not-found'], { relativeTo: this.activatedRoute })
    }

    // Reactive validation
    this.stepForm = new FormGroup({
      'sub-service': new FormControl(
        this.answer,
        [Validators.required]),
    });
  }

  Next() {
    this.dataPoint.Question = [];
    this.dataPoint.Answer = [];
    
    this.dataPoint.Id = 2;
    this.dataPoint.Question.push(this.question);
    this.dataPoint.Answer.push(this.stepForm.get('sub-service').value);
    this.dataPoint.StartTime = this.startTime;
    this.dataPoint.EndTime = new Date();
    this.dataPointService.addDataPoint(this.dataPoint);

    this.router.navigateByUrl('/step-3/' + this.commonService.GetGUID());
  }

  Back() {
    this.router.navigateByUrl('/stepped-1/' + this.commonService.GetGUID());
  }
}
