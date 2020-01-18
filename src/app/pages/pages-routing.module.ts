import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MonthAccountsComponent } from './month-accounts/month-accounts.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'billing', pathMatch: 'full' },
      { path: 'billing', loadChildren: './billing/billing.module#BillingModule' },
      { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
      { path: 'monthAccounts', loadChildren: './month-accounts/month-accounts.module#MonthAccountsModule' },
      { path: 'yearAccounts', loadChildren: './year-accounts/year-accounts.module#YearAccountsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
