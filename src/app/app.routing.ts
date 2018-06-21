import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrantsSearchComponent } from './grants-search/grants-search.component';
import { GrantDetailsComponent } from './grant-details/grant-details.component';
import { ConfirmComponent } from './navbar/authentication/confirm/confirm.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/grants-search' },
  { path: 'grants-search', component: GrantsSearchComponent },
  { path: 'grant/:id', component: GrantDetailsComponent },
  { path: 'confirm-email/:id', component: ConfirmComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
