import { Injectable } from '@angular/core';
import { BaseService, HttpDefaultOptions } from 'ngx-paris';
import { HttpClient } from '@angular/common/http';
import { ColsTab0Items } from '../pages/setting/setting.model';

@Injectable({
  providedIn: 'root'
})
export class SettingService extends BaseService {
  constructor(http: HttpClient, options: HttpDefaultOptions) {
    super(http, options);
  }

  getItem(){
    return this.get('getItemSetting');
  }

  setItem(obj) {
    return this.put('setItemSetting',{
      body: obj
    })
  }

  getCompanies(){
    return this.get('getCompanySetting');
  }
}
