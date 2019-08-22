import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { DataPointService } from '../../../services/data-point.service';
import { CommonService } from 'src/app/services/common.service';
import { DataPointModel } from '../../../models/data-point.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step1Component implements OnInit {

  private stepForm: FormGroup;
  private dataPoint: DataPointModel = new DataPointModel();
  private question: string;
  private answer: string;
  private jar: any;
  private startTime

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private dataPointService: DataPointService,
    private commonService: CommonService) {
    this.question = 'Which service would you like a loan for?';
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.jar = params.jar;
    });
    this.startTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(0);

    this.answer = this.dataPointService.getPreviousDataPointState(1);

    if (this.jar != this.commonService.GetGUID()) {
      this.router.navigateByUrl('/not-found');
    }

    // Reactive validation
    this.stepForm = new FormGroup({
      'service': new FormControl(
        this.answer,
        [Validators.required]),
    });
  }

  Next() {
    this.dataPoint.Id = 1;
    this.dataPoint.Question = this.question;
    this.dataPoint.Answer = this.stepForm.get('service').value;
    this.dataPoint.StartTime = this.startTime;
    this.dataPoint.EndTime = new Date();
    this.dataPointService.addDataPoint(this.dataPoint);

    this.router.navigateByUrl('/step-2/' + this.commonService.GetGUID());
  }
}
