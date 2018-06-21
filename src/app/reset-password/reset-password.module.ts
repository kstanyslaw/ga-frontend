import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordService } from './reset-password.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ResetPasswordComponent],
  providers: [ResetPasswordService]
})
export class ResetPasswordModule { }
