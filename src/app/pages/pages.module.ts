import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MenuComponent } from './menu/menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  declarations: [PagesComponent, MenuComponent, TopBarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
