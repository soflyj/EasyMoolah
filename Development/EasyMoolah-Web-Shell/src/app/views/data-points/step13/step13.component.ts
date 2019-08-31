import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPointModel } from 'src/app/models/data-point.model';
import { DataPointService } from 'src/app/services/data-point.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'app-step13',
    templateUrl: './step13.component.html',
    styleUrls: ['../../../../assets/css/em_site_theme.css']
})
export class Step13Component implements OnInit {

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
      this.question = 'Are you a homeowner?';
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: any) => {
          this.jar = params.jar;
        });
        this.startTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(72);
    
        if (this.dataPointService.getPreviousDataPointState(13) != null) {
          this.answer = this.dataPointService.getPreviousDataPointState(13)[0];
        }
    
        if (this.jar != this.commonService.GetGUID()) {
          this.router.navigate(['not-found'], { relativeTo: this.activatedRoute })
        }

        // Reactive validation
        this.stepForm = new FormGroup({
            'home-owner': new FormControl(
                this.answer,
                [Validators.required]
            ),
        });
    }

    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        
        this.dataPoint.Id = 13;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('home-owner').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
      }
    
      Back() {

      }
}
