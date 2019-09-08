import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataPointModel } from 'src/app/models/data-point.model';
import { DataPointService } from 'src/app/services/data-point.service';
import { CommonService } from 'src/app/services/common.service';
import 'linq4js';

@Component({
  selector: 'app-step14',
  templateUrl: './step14.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css', './step14.component.css']
})
export class Step14Component implements OnInit {

  stepForm: FormGroup;
  dataPoint: DataPointModel = new DataPointModel();
  question: string;
  answer: string[] = null;
  jar: any;
  startTime

  formattedAddress: string;
  street: string;
  suburb: string;
  city: string;
  postalCode: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private dataPointService: DataPointService,
    private commonService: CommonService,
    private zone: NgZone) {
    this.question = 'What\'s your home address?';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.jar = params.jar;
    });
    this.startTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(78);

    if (this.dataPointService.getPreviousDataPointState(14) != null) {
      this.answer = this.dataPointService.getPreviousDataPointState(14);

      this.street = this.answer[0];
      this.suburb = this.answer[1];
      this.city = this.answer[2];
      this.postalCode = this.answer[3];
    }

    if (this.jar != this.commonService.GetGUID()) {
      this.router.navigate(['not-found'], { relativeTo: this.activatedRoute })
    }


    // Reactive validation
    this.stepForm = new FormGroup({
      'street': new FormControl(
        (this.answer == null ? '' : this.street),
        [Validators.required]),
      'suburb': new FormControl(
        (this.answer == null ? '' : this.suburb),
        [Validators.required]),
      'city': new FormControl(
        (this.answer == null ? '' : this.city),
        [Validators.required]),
      'postalcode': new FormControl(
        (this.answer == null ? '' : this.postalCode),
        [Validators.required])
    });
  }
  getAddress(place: object) {
    this.formattedAddress = place['formatted_address'];
    console.log(place['formatted_address']);
    // tslint:disable-next-line:max-line-length
    this.street = place['address_components'].Where(w => w.types[0] === 'street_number').Select(s => s.long_name)[0] + ' ' + place['address_components'][1].long_name;
    this.suburb = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_2').Select(s => s.long_name)[0];
    this.city = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_1').Select(s => s.long_name)[0];
    this.postalCode = place['address_components'].Where(w => w.types[0] === 'postal_code').Select(s => s.long_name)[0];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
  }

  Next() {
    this.dataPoint.Question = [];
    this.dataPoint.Answer = [];

    this.dataPoint.Id = 14;
    this.dataPoint.Question.push('StreetName', 'SuburbName', 'CityName', 'PostCode');
    this.dataPoint.Answer.push(this.street, this.suburb, this.city, this.postalCode);
    this.dataPoint.StartTime = this.startTime;
    this.dataPoint.EndTime = new Date();
    this.dataPointService.addDataPoint(this.dataPoint);
  }

  Back() {

  }
}
