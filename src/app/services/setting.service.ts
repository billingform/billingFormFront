import { Injectable } from '@angular/core';
import { BaseService, HttpDefaultOptions } from 'ngx-paris';
import { HttpClient } from '@angular/common/http';

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
}
