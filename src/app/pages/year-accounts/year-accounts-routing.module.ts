import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearAccountsComponent } from './year-accounts.component';


const routes: Routes = [
  { path: '', component: YearAccountsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearAccountsRoutingModule { }
