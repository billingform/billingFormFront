import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthAccountsComponent } from './month-accounts.component';


const routes: Routes = [
  { path: '', component: MonthAccountsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthAccountsRoutingModule { }
