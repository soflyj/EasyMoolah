import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { Step16Component } from './views/data-points/step16/step16.component'

const appRoutes: Routes = [
  { path: '', component: LandingScreenComponent, pathMatch: 'full' },
  //Forward
  { path: 'step-1/:jar', component: Step1Component, data: {state: 'step-1'} },
  { path: 'step-2/:jar', component: Step2Component, data: {state: 'step-2'} },
  { path: 'step-3/:jar', component: Step3Component, data: {state: 'step-3'}  },
  { path: 'step-4/:jar', component: Step4Component },
  { path: 'step-5/:jar', component: Step5Component },
  { path: 'step-6/:jar', component: Step6Component },
  { path: 'step-7/:jar', component: Step7Component },
  { path: 'step-8/:jar', component: Step8Component },
  { path: 'step-9/:jar', component: Step9Component },
  { path: 'step-10/:jar', component: Step10Component },
  { path: 'step-11/:jar', component: Step11Component },
  { path: 'step-12/:jar', component: Step12Component },
  { path: 'step-13/:jar', component: Step13Component },
  { path: 'step-14/:jar', component: Step14Component },
  { path: 'step-15/:jar', component: Step15Component },
  { path: 'step-16/:jar', component: Step16Component },

  //Back
  { path: 'stepped-1/:jar', component: Step1Component, data: {state: 'stepped-1'} },
  { path: 'stepped-2/:jar', component: Step2Component , data: {state: 'stepped-2'}},
  { path: 'stepped-3/:jar', component: Step3Component , data: {state: 'stepped-3'}},
  { path: 'stepped-4/:jar', component: Step4Component },
  { path: 'stepped-5/:jar', component: Step5Component },
  { path: 'stepped-6/:jar', component: Step6Component },
  { path: 'stepped-7/:jar', component: Step7Component },
  { path: 'stepped-8/:jar', component: Step8Component },
  { path: 'stepped-9/:jar', component: Step9Component },
  { path: 'stepped-10/:jar', component: Step10Component },
  { path: 'stepped-11/:jar', component: Step11Component },
  { path: 'stepped-12/:jar', component: Step12Component },
  { path: 'stepped-13/:jar', component: Step13Component },
  { path: 'stepped-14/:jar', component: Step14Component },
  { path: 'stepped-15/:jar', component: Step15Component },
  { path: 'stepped-16/:jar', component: Step16Component },

  { path: '**', component: NotFoundComponent },
  { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
