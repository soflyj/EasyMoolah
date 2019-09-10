import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { DataPointService } from '../../../services/data-point.service';
import { CommonService } from 'src/app/services/common.service';
import { FormService } from 'src/app/views/data-points/application/form.service';
import { DataPointModel } from '../../../models/data-point.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css']
})
export class Step4Component implements OnInit {

  stepForm: FormGroup;
  dataPoint: DataPointModel = new DataPointModel();
  question: string;
  answer: string = null;
  guid: any;
  startTime

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private dataPointService: DataPointService,
    private commonService: CommonService,
    private formService: FormService) {
    this.question = 'Have you applied for or are you under formal debt review?';
  }
  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.guid= params.guid;
    });
    this.startTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(18);

    if (this.dataPointService.getPreviousDataPointState(4) != null) {
      this.answer = this.dataPointService.getPreviousDataPointState(4)[0];
    }

    if (this.guid != this.commonService.GetGUID()) {
      this.router.navigateByUrl('/not-found');
    }

    // Reactive validation
    this.stepForm = new FormGroup({
      'formal-debt-review': new FormControl(
        this.answer,
        [Validators.required]),
    });
    // this.formService.stepReady(this.stepForm, 'four')
  }

  Next() {
    this.dataPoint.Question = [];
    this.dataPoint.Answer = [];

    this.dataPoint.Id = 4;
    this.dataPoint.Question.push(this.question);
    this.dataPoint.Answer.push(this.stepForm.get('formal-debt-review').value);
    this.dataPoint.StartTime = this.startTime;
    this.dataPoint.EndTime = new Date();
    this.dataPointService.addDataPoint(this.dataPoint);

    // this.router.navigateByUrl('/step-5/' + this.commonService.GetGUID());
  }

  Back() {
    // this.router.navigateByUrl('/stepped-3/' + this.commonService.GetGUID());
  }
}
