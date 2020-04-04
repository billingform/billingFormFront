import { SettingService } from './../../services/setting.service';
import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { ColsTab0, ColsTab0Items } from './setting.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit, AfterContentChecked, OnDestroy {

  selected: any;
  isEdit = false;
  tabPageNum = 0;

  // Tab0
  colsTab0Items: ColsTab0Items[];
  colsTab0 = ColsTab0;
  colsTab0Input = {
    name: '',
    unit: '',
    amount: '',
    remark: ''
  }
  colsTab0CreateBtn = false;

  // Tab2
  cars: Car[];
  cols: any[];
  brands = [];
  colors = [];

  constructor(
    private settingService: SettingService
  ) {
  }

  ngOnInit() {
    this.changesTab(0);
  }

  ngAfterContentChecked() {
    this.colsTab0CreateBtn = !!this.colsTab0Input.name && !!this.colsTab0Input.unit
      && !!parseInt(this.colsTab0Input.amount);
  }

  ngOnDestroy() {
    // todo Execute after leaving (save or cencal)
  }

  handleChange($event) {
    this.tabPageNum = $event.index;
    this.changesTab(this.tabPageNum);
  }

  changesTab(pageNum) {
    switch (pageNum) {
      case pageNum === 1:
        this.getFalseTabData();
        break;

      default:
        this.getItems();
        break;
    }
  }

  getItems() {
    this.settingService.getItem().subscribe((resp: ColsTab0Items[]) => {
      this.colsTab0Items = resp;
    })
  }

  getFalseTabData() {
    this.cars = [
      { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
      { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
      { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
      { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
      { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
      { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
      { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
      { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
      { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
      { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
      { "brand": "VW", "year": 123, "color": "Orange", "vin": "dsad231ff" },
      { "brand": "Audi", "year": 123, "color": "Black", "vin": "gwregre345" },
      { "brand": "Renault", "year": 123, "color": "Gray", "vin": "h354htr" },
      { "brand": "BMW", "year": 123, "color": "Blue", "vin": "j6w54qgh" },
      { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
      { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
      { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
      { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
      { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
      { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
    ]

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.brands = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];
  }
}

interface Car {
  vin;
  year;
  brand;
  color;
}
