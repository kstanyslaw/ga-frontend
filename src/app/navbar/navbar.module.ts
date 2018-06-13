import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing';

import { NavbarComponent } from './navbar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ConfirmComponent } from './authentication/confirm/confirm.component';
import { LoginComponent } from './authentication/login/login.component';
import { SingupComponent } from './authentication/singup/singup.component';

import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    NavbarComponent,
    AuthenticationComponent,
    ConfirmComponent,
    LoginComponent,
    SingupComponent
  ],
  providers: [AuthenticationService],
  exports: [
    NavbarComponent,
    AuthenticationComponent,
    ConfirmComponent,
    LoginComponent,
    SingupComponent
  ]
})
export class NavbarModule { }
