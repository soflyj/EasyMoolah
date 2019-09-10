import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatProgressBarModule,
  MatRippleModule,
  MatFormFieldModule,
  MatExpansionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './views/common/google-places.component';
import { GoogleMaps } from './services/googlemaps.service';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { HeaderService } from './services/header.service'
import { DataPointService } from './services/data-point.service'
import { CommonService } from './services/common.service'
import { NedbankService } from './services/nedbank.service'
import { FormService } from './views/data-points/application/form.service'

import { AppComponent } from './app.component';
import { NotFoundComponent } from './views/not-found/not-found.component'
import { LandingScreenComponent } from './views/landing-screen/landing-screen.component'
import { Step1Component } from './views/data-points/step1/step1.component'
import { Step2Component } from './views/data-points/step2/step2.component'
import { Step3Component } from './views/data-points/step3/step3.component'
import { Step4Component } from './views/data-points/step4/step4.component'
import { Step5Component } from './views/data-points/step5/step5.component'
import { Step6Component } from './views/data-points/step6/step6.component'
import { Step7Component } from './views/data-points/step7/step7.component'
import { Step8Component } from './views/data-points/step8/step8.component'
import { Step9Component } from './views/data-points/step9/step9.component'
import { Step10Component } from './views/data-points/step10/step10.component'
import { Step11Component } from './views/data-points/step11/step11.component'
import { Step12Component } from './views/data-points/step12/step12.component'
import { Step13Component } from './views/data-points/step13/step13.component'
import { Step14Component } from './views/data-points/step14/step14.component'
import { Step15Component } from './views/data-points/step15/step15.component'
import { Step16Component } from './views/data-points/step16/step16.component';
import { HeaderComponent } from './views/header/header.component';
import { ApplicationComponent } from './views/data-points/application/application.component';
import { AuthorisationRedirectComponent } from './views/nedbank/authorisation-redirect/authorisation-redirect.component';
import { AccessAuthorisationComponent } from './views/nedbank/access-authorisation/access-authorisation.component';
import { GenerateAuthorisationComponent } from './views/nedbank/generate-authorisation/generate-authorisation.component'


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingScreenComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step9Component,
    Step10Component,
    Step11Component,
    Step12Component,
    Step13Component,
    Step14Component,
    Step15Component,
    Step16Component,
    HeaderComponent,
    AutocompleteComponent,
    ApplicationComponent,
    AuthorisationRedirectComponent,
    AccessAuthorisationComponent,
    GenerateAuthorisationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatStepperModule,
    //   HttpModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    HeaderService,
    DataPointService,
    CommonService,
    NedbankService,
    FormService,
    GoogleMaps],
  bootstrap: [AppComponent]
})
export class AppModule { }
