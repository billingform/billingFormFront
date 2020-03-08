import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    TabViewModule
  ]
})
export class SettingModule { }
