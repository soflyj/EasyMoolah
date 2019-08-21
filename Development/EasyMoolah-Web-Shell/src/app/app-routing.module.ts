import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './application/not-found/not-found.component';
import { LandingScreenComponent } from './application/landing-screen/landing-screen.component';
import { Step1Component } from './application/data-points/step1/step1.component';
import { Step2Component } from './application/data-points/step2/step2.component'



const appRoutes: Routes = [
  { path: '', component: LandingScreenComponent, pathMatch: 'full' },
  //Forward
  { path: 'step/1', component: Step1Component },
  { path: 'step/2', component: Step2Component },
  //Back
  { path: 'step/-1', component: Step1Component },
  { path: 'step/-2', component: Step2Component },
  { path: '**', component: NotFoundComponent },
  { path: 'notfound', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
