import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GrantDetailsModule } from './grant-details/grant-details.module';
import { GrantsSearchModule } from './grants-search/grants-search.module';
import { NavbarModule } from './navbar/navbar.module';
import { PricingModule } from './pricing/pricing.module';
import { ProfileModule } from './profile/profile.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app.routing';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    GrantDetailsModule,
    GrantsSearchModule,
    NavbarModule,
    PricingModule,
    ProfileModule,
    ResetPasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
