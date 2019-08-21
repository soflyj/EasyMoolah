import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule, MatFormFieldModule, MatInputModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderService } from './services/header.service'

import { AppComponent } from './app.component';
import { NotFoundComponent } from './application/not-found/not-found.component';
import { Step1Component } from './application/data-points/step1/step1.component';
import { Step2Component } from './application/data-points/step2/step2.component';
import { LandingScreenComponent } from './application/landing-screen/landing-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    Step1Component,
    Step2Component,    
    LandingScreenComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
