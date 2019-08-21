import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './application/not-found/not-found.component';
import { StartPageComponent } from './application/start-page/start-page.component';
import { Step1Component } from './application/data-points/step1/step1.component';
import { Step2Component } from './application/data-points/step2/step2.component';
import { DataPointsStepperComponent } from './application/data-points/data-points-stepper/data-points-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StartPageComponent,
    Step1Component,
    Step2Component,
    DataPointsStepperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
