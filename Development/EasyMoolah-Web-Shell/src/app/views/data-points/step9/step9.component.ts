import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPointModel } from 'src/app/models/data-point.model';
import { DataPointService } from 'src/app/services/data-point.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css']
})
export class Step9Component implements OnInit {

  stepForm: FormGroup;
  dataPoint: DataPointModel = new DataPointModel();
  question: string;
  answer: string = null;
  guid: any;
  startTime
  nettincome_slider: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private dataPointService: DataPointService,
    private commonService: CommonService) {
    this.question = 'What\'s your net monthly income?';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.guid= params.guid;
    });
    this.startTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(48);

    this.nettincome_slider = '50000'; // Default range

    if (this.dataPointService.getPreviousDataPointState(9) != null) {
      this.answer = this.dataPointService.getPreviousDataPointState(9)[0];
    }

    if (this.guid != this.commonService.GetGUID()) {
      this.router.navigate(['not-found'], { relativeTo: this.activatedRoute })
    }

    // Reactive validation
    this.stepForm = new FormGroup({
      'nettincome_slider': new FormControl(
        this.nettincome_slider,
        [Validators.required])
    });

  }

  Next() {
    this.dataPoint.Question = [];
    this.dataPoint.Answer = [];

    this.dataPoint.Id = 9;
    this.dataPoint.Question.push(this.question);
    this.dataPoint.Answer.push(this.stepForm.get('nettincome_slider').value);
    this.dataPoint.StartTime = this.startTime;
    this.dataPoint.EndTime = new Date();
    this.dataPointService.addDataPoint(this.dataPoint);
  }

  Back() {

  }
}
