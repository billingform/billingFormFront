import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { FormsModule } from '@angular/forms';
import { CommonComponentModule } from 'src/app/common/common-component.module';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    CommonComponentModule
  ]
})
export class SettingModule { }
