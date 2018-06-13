import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantDetailsComponent } from './grant-details.component';
import { GrantDetailsService } from './grant-details.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GrantDetailsComponent
  ],
  providers: [
    GrantDetailsService
  ],
  exports: [
    GrantDetailsComponent
  ]
})
export class GrantDetailsModule { }
