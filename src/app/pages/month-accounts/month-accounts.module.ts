import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthAccountsRoutingModule } from './month-accounts-routing.module';
import { MonthAccountsComponent } from './month-accounts.component';


@NgModule({
  declarations: [MonthAccountsComponent],
  imports: [
    CommonModule,
    MonthAccountsRoutingModule
  ]
})
export class MonthAccountsModule { }
