import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearAccountsRoutingModule } from './year-accounts-routing.module';
import { YearAccountsComponent } from './year-accounts.component';


@NgModule({
  declarations: [YearAccountsComponent],
  imports: [
    CommonModule,
    YearAccountsRoutingModule
  ]
})
export class YearAccountsModule { }
