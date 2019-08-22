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
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Step3Component implements OnInit {

  private stepForm: FormGroup;
  private dataPoint: DataPointModel = new DataPointModel();
  private question: string;
  private answer: string;
  private jar: any;
  private startTime
  private borrowamount_slider: string;
  private borrowmonths_slider: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private dataPointService: DataPointService,
    private commonService: CommonService) {
    this.question = 'How much do you want to borrow?';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.jar = params.jar;
    });
    this.startTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(12);

    this.answer = this.dataPointService.getPreviousDataPointState(3);
    this.borrowamount_slider = '5000';
    this.borrowmonths_slider = '24';

    if (this.answer != undefined) {
      this.borrowamount_slider = this.answer.toString().split('|', 3)[0];
      this.borrowmonths_slider = this.answer.toString().split('|', 3)[1];
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

  }

  Next() {
    this.dataPoint.Id = 3;
    this.dataPoint.Question = this.question;
    this.dataPoint.Answer = this.stepForm.get('borrowamount_slider').value + '|' + this.stepForm.get('borrowmonths_slider').value;
    this.dataPoint.StartTime = this.startTime;
    this.dataPoint.EndTime = new Date();
    this.dataPointService.addDataPoint(this.dataPoint);

    this.router.navigateByUrl('/step-4/' + this.commonService.GetGUID());
  }

  Back() {
    this.router.navigateByUrl('/stepped-2/' + this.commonService.GetGUID());
  }
}
