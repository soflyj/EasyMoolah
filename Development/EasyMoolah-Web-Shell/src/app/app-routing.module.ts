import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
// Nedbank
import { AccessAuthorisationComponent } from './views/nedbank/access-authorisation/access-authorisation.component'
import { AuthorisationRedirectComponent } from './views/nedbank/authorisation-redirect/authorisation-redirect.component'
import { GenerateAuthorisationComponent } from './views/nedbank/generate-authorisation/generate-authorisation.component'
import { LoanOffersComponent } from './views/nedbank/loan-offers/loan-offers.component'
import { CustomerFinancialInformationComponent } from './views/nedbank/customer-financial-information/customer-financial-information.component'
import { NedbankStepperComponent } from './views/nedbank/nedbank-stepper/nedbank-stepper.component'

import { NotFoundComponent } from './views/not-found/not-found.component'
import { LandingScreenComponent } from './views/landing-screen/landing-screen.component'
import { ApplicationComponent } from './views/data-points/application/application.component'
// Data Points
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
  { path: 'nedbank', component: AuthorisationRedirectComponent },
  { path: '', component: LandingScreenComponent, pathMatch: 'full' },

  { path: 'application/:guid', component: ApplicationComponent, data: { state: 'application' } },
  { path: 'step-1/:guid', component: Step1Component, data: { state: 'step-1' } },
  { path: 'step-2/:guid', component: Step2Component, data: { state: 'step-2' } },
  { path: 'step-3/:guid', component: Step3Component, data: { state: 'step-3' } },
  { path: 'step-4/:guid', component: Step4Component, data: { state: 'step-4' } },
  { path: 'step-5/:guid', component: Step5Component, data: { state: 'step-5' } },
  { path: 'step-6/:guid', component: Step6Component, data: { state: 'step-6' } },
  { path: 'step-7/:guid', component: Step7Component, data: { state: 'step-7' } },
  { path: 'step-8/:guid', component: Step8Component, data: { state: 'step-8' } },
  { path: 'step-9/:guid', component: Step9Component, data: { state: 'step-9' } },
  { path: 'step-10/:guid', component: Step10Component, data: { state: 'step-10' } },
  { path: 'step-11/:guid', component: Step11Component, data: { state: 'step-11' } },
  { path: 'step-12/:guid', component: Step12Component, data: { state: 'step-12' } },
  { path: 'step-13/:guid', component: Step13Component, data: { state: 'step-13' } },
  { path: 'step-14/:guid', component: Step14Component, data: { state: 'step-14' } },
  { path: 'step-15/:guid', component: Step15Component, data: { state: 'step-15' } },
  { path: 'step-16/:guid', component: Step16Component, data: { state: 'step-16' } },

  // { path: 'nedbank/:guid', component: NedbankStepperComponent,},
  { path: 'authorise/:guid', component: AccessAuthorisationComponent, data: { state: 'authorise' } },
  //  { path: 'redirect', component: AuthorisationRedirectComponent , data: {state: 'access'}},
  { path: 'loans/:guid', component: LoanOffersComponent, data: { state: 'authorise' } },
  { path: 'cusinfos/:guid', component: CustomerFinancialInformationComponent, data: { state: 'authorise' } },

  { path: '**', component: NotFoundComponent },
  { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule {

}
