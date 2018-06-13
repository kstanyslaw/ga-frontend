import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app.routing';

import { GrantsSearchComponent } from './grants-search.component';
import { ManualyAddComponent } from './manualy-add/manualy-add.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './manualy-add/modal/modal.component';
import { ModalFormComponent } from './manualy-add/modal-form/modal-form.component';

import { GrantsSearchService } from './grants-search.service';
import { ManualyAddService } from './manualy-add/manualy-add.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    GrantsSearchComponent,
    ManualyAddComponent,
    SearchFilterComponent,
    TableComponent,
    ModalComponent,
    ModalFormComponent
  ],
  providers: [
    GrantsSearchService,
    ManualyAddService
  ],
  exports: [
    GrantsSearchComponent,
    ManualyAddComponent,
    SearchFilterComponent,
    TableComponent,
    ModalComponent,
    ModalFormComponent
  ]
})
export class GrantsSearchModule { }
