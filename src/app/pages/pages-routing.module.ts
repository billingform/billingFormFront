import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'billing', pathMatch: 'full' },
      { path: 'billing', loadChildren: './billing/billing.module#BillingModule' },
      { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
      { path: 'monthAccounts', loadChildren: './month-accounts/month-accounts.module#MonthAccountsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
