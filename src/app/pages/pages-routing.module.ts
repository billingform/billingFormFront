import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MonthAccountsComponent } from './month-accounts/month-accounts.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'billing', pathMatch: 'full' },
      { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
      { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
      { path: 'monthAccounts', loadChildren: () => import('./month-accounts/month-accounts.module').then(m => m.MonthAccountsModule) },
      { path: 'yearAccounts', loadChildren: () => import('./year-accounts/year-accounts.module').then(m => m.YearAccountsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
