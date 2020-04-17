import { Component, OnInit } from '@angular/core';
import { Car } from '../setting/setting.component';
import { column, Column } from './month-accounts.model';

@Component({
  selector: 'app-month-accounts',
  templateUrl: './month-accounts.component.html',
  styleUrls: ['./month-accounts.component.scss']
})
export class MonthAccountsComponent implements OnInit {
  tabPageNum = 0;
  cars: Car[];
  cols: any[];
  brands = [];
  colors = [];
  isEdit = false;
  colsTab0Items;
  column = column;
  colsTab0CreateBtn;
  createDataInput = new Column();
  selected
  constructor() { }

  ngOnInit() {
  }

  backPage(event) {

  }

  handleChange(event) {

  }
  setItems(event) {

  }

  deleteItems(event) { }
}
