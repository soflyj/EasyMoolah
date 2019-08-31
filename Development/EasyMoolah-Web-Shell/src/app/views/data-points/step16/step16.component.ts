import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPointModel } from 'src/app/models/data-point.model';
import { DataPointService } from 'src/app/services/data-point.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'app-step16',
    templateUrl: './step16.component.html',
    styleUrls: ['../../../../assets/css/em_site_theme.css']
})
export class Step16Component implements OnInit {

    private stepForm: FormGroup;
    private dataPoint: DataPointModel = new DataPointModel();
    private question: string;
    private answer: string = null;
    private jar: any;
    private startTime

    idnumber: string;
    maxLength = 13;
    pattern: any;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private headerService: HeaderService,
        private dataPointService: DataPointService,
        private commonService: CommonService) {
        this.question = 'Personal Identification Number';
      }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: any) => {
            this.jar = params.jar;
          });
          this.startTime = new Date();
          this.headerService.mode.next('determinate');
          this.headerService.progress.next(100);
      
        //   if (this.dataPointService.getPreviousDataPointState(2) != null) {
        //     this.answer = this.dataPointService.getPreviousDataPointState(2)[0];
        //   }
      
          if (this.jar != this.commonService.GetGUID()) {
            this.router.navigate(['not-found'], { relativeTo: this.activatedRoute })
          }

        // Reactive validation
        this.stepForm = new FormGroup({
            'idnumber': new FormControl(
                '',
                [Validators.required, this.CheckSAIdNumber.bind(this)]
            )
        });
    }

    CheckSAIdNumber(control: FormControl): { [s: string]: boolean } {
        this.idnumber = control.value;
        // tslint:disable-next-line:max-line-length
        this.pattern = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
        if (!(this.pattern.test(this.idnumber) && this.idnumber.length == 13)) {
            return { 'IdNumberValid': true };
        } else {
            return null;
        }
    }

    Next() {
        this.dataPoint.Question = [];
        this.dataPoint.Answer = [];
        
        this.dataPoint.Id = 16;
        this.dataPoint.Question.push(this.question);
        this.dataPoint.Answer.push(this.stepForm.get('idnumber').value);
        this.dataPoint.StartTime = this.startTime;
        this.dataPoint.EndTime = new Date();
        this.dataPointService.addDataPoint(this.dataPoint);
      }
    
      Back() {

      }
}
