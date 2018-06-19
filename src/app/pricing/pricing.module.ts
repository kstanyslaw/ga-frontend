import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { AppRoutingModule } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    PricingComponent
  ],
  exports: [
    PricingComponent
  ]
})
export class PricingModule { }
