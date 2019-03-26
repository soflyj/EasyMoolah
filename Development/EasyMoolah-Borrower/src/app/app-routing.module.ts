import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

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
import { ProcessingComponent } from './application/processing/processing.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'application', component: Q2Component, data: {state: 'application'}},
  // Next
  { path: 'q1', component: Q1Component, data: {state: 'q1'}},
  { path: 'q2', component: Q2Component, data: {state: 'q2'}},
  { path: 'q3', component: Q3Component, data: {state: 'q3'}},
  { path: 'q4', component: Q4Component, data: {state: 'q4'}},
  { path: 'q5', component: Q5Component, data: {state: 'q5'}},
  { path: 'q6', component: Q6Component, data: {state: 'q6'}},
  { path: 'q7', component: Q7Component, data: {state: 'q7'}},
  { path: 'q8', component: Q8Component, data: {state: 'q8'}},
  { path: 'q9', component: Q9Component, data: {state: 'q9'}},
  { path: 'q10', component: Q10Component, data: {state: 'q10'}},
  { path: 'q11', component: Q11Component, data: {state: 'q11'}},
  { path: 'q12', component: Q12Component, data: {state: 'q12'}},
  { path: 'q13', component: Q13Component, data: {state: 'q13'}},
  { path: 'q14', component: Q14Component, data: {state: 'q14'}},
  { path: 'q15', component: Q15Component, data: {state: 'q15'}},
  { path: 'q16', component: Q16Component, data: {state: 'q16'}},
  // Back
  { path: 'bq1', component: Q1Component, data: {state: 'bq1'}},
  { path: 'bq2', component: Q2Component, data: {state: 'bq2'}},
  { path: 'bq3', component: Q3Component, data: {state: 'bq3'}},
  { path: 'bq4', component: Q4Component, data: {state: 'bq4'}},
  { path: 'bq5', component: Q5Component, data: {state: 'bq5'}},
  { path: 'bq6', component: Q6Component, data: {state: 'bq6'}},
  { path: 'bq7', component: Q7Component, data: {state: 'bq7'}},
  { path: 'bq8', component: Q8Component, data: {state: 'bq8'}},
  { path: 'bq9', component: Q9Component, data: {state: 'bq9'}},
  { path: 'bq10', component: Q10Component, data: {state: 'bq10'}},
  { path: 'bq11', component: Q11Component, data: {state: 'bq11'}},
  { path: 'bq12', component: Q12Component, data: {state: 'bq12'}},
  { path: 'bq13', component: Q13Component, data: {state: 'bq13'}},
  { path: 'bq14', component: Q14Component, data: {state: 'bq14'}},
  { path: 'bq15', component: Q15Component, data: {state: 'bq15'}},

  { path: 'processing', component: ProcessingComponent, data: {state: 'processing'}},
  { path: 'financialresult', component: FinancialresultComponent, data: {state: 'financialresult'}},

  { path: '**', component: NotFoundComponent },
  { path: 'notfound', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
