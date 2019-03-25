// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './google-places.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatInputModule,
  MatProgressBarModule,
  MatRippleModule,
  MatFormFieldModule,
  MatExpansionModule

} from '@angular/material';

// Services
import { BorrowerService } from './service/borrower.service';
import { FincheckService } from './service/fincheck.service';
import { HeaderService } from './service/header.service';
import { GoogleMaps } from './common/googlemaps.service';

import { Fincheck } from './model/fincheck.model';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FinancialresultComponent } from './application/financialresult/financialresult.component';
import { LandingComponent } from './application/landing/landing.component';
import { Q1Component } from './application/q1/q1.component';
import { Q2Component } from './application/q2/q2.component';
import { Q3Component } from './application/q3/q3.component';
import { Q4Component } from './application/q4/q4.component';
import { Q5Component } from './application/q5/q5.component';
import { Q6Component } from './application/q6/q6.component';
import { Q7Component } from './application/q7/q7.component';
import { Q8Component } from './application/q8/q8.component';
import { Q9Component } from './application/q9/q9.component';
import { Q10Component } from './application/q10/q10.component';
import { Q11Component } from './application/q11/q11.component';
import { Q12Component } from './application/q12/q12.component';
import { Q13Component } from './application/q13/q13.component';
import { Q14Component } from './application/q14/q14.component';
import { Q15Component } from './application/q15/q15.component';
import { Q16Component } from './application/q16/q16.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ProcessingComponent } from './application/processing/processing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    Q5Component,
    Q6Component,
    Q7Component,
    Q8Component,
    Q9Component,
    Q10Component,
    Q11Component,
    Q12Component,
    Q13Component,
    Q14Component,
    Q15Component,
    Q16Component,
    FinancialresultComponent,
    NotFoundComponent,
    ErrorComponent,
    AutocompleteComponent,
    ProcessingComponent
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
    HttpModule,
    HttpClientModule
  ],
  providers: [BorrowerService, GoogleMaps, HeaderService, FincheckService, Fincheck],
  bootstrap: [AppComponent]
})
export class AppModule { }
