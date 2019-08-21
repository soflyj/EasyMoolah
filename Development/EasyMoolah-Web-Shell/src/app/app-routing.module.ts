import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './application/not-found/not-found.component';
import { StartPageComponent } from './application/start-page/start-page.component';
import { Step1Component } from './application/data-points/step1/step1.component';
import { DataPointsStepperComponent } from './application/data-points/data-points-stepper/data-points-stepper.component';


const appRoutes: Routes = [
  { path: 'dps', component: DataPointsStepperComponent},
  { path: '**', component: NotFoundComponent },
  { path: 'notfound', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
