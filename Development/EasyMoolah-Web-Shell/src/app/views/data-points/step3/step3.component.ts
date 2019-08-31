import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPointModel } from 'src/app/models/data-point.model';
import { DataPointService } from 'src/app/services/data-point.service';
import { CommonService } from 'src/app/services/common.service';
import { FormService } from 'src/app/views/data-points/application/form.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css']
})
export class Step3Component implements OnInit {

  private stepForm: FormGroup;
  private dataPoint: DataPointModel = new DataPointModel();
  private question_1: string;
  private question_2: string;
  private answer: string[];
  private jar: any;
  private startTime
  private borrowamount_slider: string;
  private borrowmonths_slider: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private dataPointService: DataPointService,
    private commonService: CommonService,
    private formService: FormService) {
    this.question_1 = 'How much do you want to borrow?';
    this.question_1 = 'Over how long?';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.jar = params.jar;
    });
    this.startTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(12);

    this.borrowamount_slider = '5000';
    this.borrowmonths_slider = '24';

    if (this.dataPointService.getPreviousDataPointState(3) != null) {
      this.borrowamount_slider = this.dataPointService.getPreviousDataPointState(3)[0];
      this.borrowmonths_slider = this.dataPointService.getPreviousDataPointState(3)[1];
    }

    if (this.jar != this.commonService.GetGUID()) {
      this.router.navigate(['not-found'], { relativeTo: this.activatedRoute })
    }

    // Reactive validation
    this.stepForm = new FormGroup({
      'borrowamount_slider': new FormControl(
        this.borrowamount_slider,
        [Validators.required]),
      'borrowmonths_slider': new FormControl(
        this.borrowmonths_slider,
        [Validators.required]),
    });
    // this.formService.stepReady(this.stepForm, 'three')
  }

  Next() {
    this.dataPoint.Question = [];
    this.dataPoint.Answer = [];

    this.dataPoint.Id = 3;
    this.dataPoint.Question.push(this.question_1);
    this.dataPoint.Answer.push(this.stepForm.get('borrowamount_slider').value);
    this.dataPoint.Question.push(this.question_2);
    this.dataPoint.Answer.push(this.stepForm.get('borrowmonths_slider').value);
    this.dataPoint.StartTime = this.startTime;
    this.dataPoint.EndTime = new Date();
    this.dataPointService.addDataPoint(this.dataPoint);

    // this.router.navigateByUrl('/step-4/' + this.commonService.GetGUID());
  }

  Back() {
    // this.router.navigateByUrl('/stepped-2/' + this.commonService.GetGUID());
  }
}
