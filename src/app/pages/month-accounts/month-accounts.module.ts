import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthAccountsRoutingModule } from './month-accounts-routing.module';
import { MonthAccountsComponent } from './month-accounts.component';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SnackbarModule } from 'ngx-snackbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MonthAccountsComponent],
  imports: [
    CommonModule,
    MonthAccountsRoutingModule,
    FormsModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    NgxSpinnerModule,
    SnackbarModule,
    NgbModule
  ]
})
export class MonthAccountsModule { }
