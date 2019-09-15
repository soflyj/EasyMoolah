import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from 'src/app/services/common.service';
import { ApplicantModel } from 'src/app/models/applicant.model';

@Component({
  selector: 'app-authorisation-redirect',
  templateUrl: './authorisation-redirect.component.html',
  styleUrls: ['../../../../assets/css/em_site_theme.css', './authorisation-redirect.component.css']
})
export class AuthorisationRedirectComponent implements OnInit {

  redirectForm: FormGroup;
  reference: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private commonService: CommonService) {
  }

  ngOnInit() {

    this.redirectForm = new FormGroup({
      'reference': new FormControl('',
        [Validators.required, Validators.maxLength(5), this.CheckReference.bind(this)])
    });

  }

  CheckReference(control: FormControl): { [s: string]: boolean } {
    if (control.value !== '') {
      this.reference = control.value;
      var referenceLength = this.reference.length;
      if (referenceLength !== 5) {
        return { 'reference': true };
      } else {
        return null;
      }
    }
  }

  Continue() {
    this.router.navigateByUrl('/nedbank/' + 'sds');
    // this.router.navigateByUrl('/cusinfos/' + this.commonService.GetGUID());
  }

}
