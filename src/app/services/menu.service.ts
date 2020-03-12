import { Injectable } from '@angular/core';
import { BaseService, HttpDefaultOptions } from 'ngx-paris';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseService {
  constructor(http: HttpClient, options: HttpDefaultOptions) {
    super(http, options);
  }

  getMenu() {
    return this.get('getMenus')
  }

}