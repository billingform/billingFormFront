import { SettingService } from './../../services/setting.service';
import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { ColsTab0, ColsTab0Items, ColTab0 } from './setting.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { SnackbarService } from 'ngx-snackbar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmPopupComponent } from '../common/confirm-popup/confirm-popup.component';

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
  colsTab0ItemsDefault: ColsTab0Items[];
  colsTab0CreateBtn = false;
  isDelete = false;
  colsTab0 = ColsTab0;
  colTab0 = ColTab0;
  colsTab0Input = {
    name: '',
    unit: '',
    amount: '',
    remark: ''
  }


  // Tab2
  cars: Car[];
  cols: any[];
  brands = [];
  colors = [];

  constructor(
    private settingService: SettingService,
    private spinner: NgxSpinnerService,
    private snackbarService: SnackbarService,
    private modalService: NgbModal
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
    if (this.leaveTabsStutas(this.tabPageNum)) {
      this.openPopup(this.tabPageNum)
    }
  }

  handleChange($event) {
    this.leaveTabsStutas(this.tabPageNum) ?
      this.openPopup(this.tabPageNum) : this.isEdit = false;
    this.tabPageNum = $event.index;
    this.changesTab(this.tabPageNum);
  }

  backPage(pageNum){
    this.changesTab(pageNum);
  }

  changesTab(pageNum) {
    switch (pageNum >= 0) {
      case pageNum === 0:
        this.getItems();
        break;
      case pageNum === 1:
        this.getFalseTabData();
        break;
    }
  }

  saveTab(pageNum) {
    switch (pageNum >= 0) {
      case pageNum === 0:
        this.setItems('S');
        break;
      case pageNum === 1:

        break;
    }
  }

  leaveTabsStutas(pageNum) {
    switch (pageNum >= 0) {
      case pageNum === 0:
        this.comparisonUpdateData(this.colsTab0ItemsDefault, this.colsTab0Items, this.colTab0);
        return (this.isEdit && !this.colsTab0Items.every(i => i.isUpdate === false)) || this.isDelete
      case pageNum === 1:

        break;
    }
  }

  getItems() {
    this.spinner.show();
    this.settingService.getItem().subscribe((resp: ColsTab0Items[]) => {
      this.colsTab0Items = resp;
      this.colsTab0ItemsDefault = JSON.parse(JSON.stringify(this.colsTab0Items));
      this.isEdit = false;
      this.isDelete = false;
      this.spinner.hide();
    })
  }

  setItems(active) {
    // Create: C, Save: S
    if (active === 'C') {
      const obj = {
        isUpdate: true,
        name: this.colsTab0Input.name,
        unit: this.colsTab0Input.unit,
        amount: parseInt(this.colsTab0Input.amount),
        remark: this.colsTab0Input.remark
      }
      this.colsTab0Items.unshift(obj);
      this.colsTab0ItemsDefault = JSON.parse(JSON.stringify(this.colsTab0Items));
    }

    // 比對找出更新的資料
    this.comparisonUpdateData(this.colsTab0ItemsDefault, this.colsTab0Items, this.colTab0);

    // 判斷是否有編輯過
    if (!this.colsTab0Items.every(i => i.isUpdate === false) || this.isDelete) {
      this.spinner.show();
      const colsTab0ItemsObj = JSON.parse(JSON.stringify(this.colsTab0Items));
      colsTab0ItemsObj.forEach(i => i.isUpdate = false);
      const items = { items: colsTab0ItemsObj }
      this.settingService.setItem(items).subscribe(resp => {
        this.colsTab0Input = {
          name: '',
          unit: '',
          amount: '',
          remark: ''
        };
        this.spinner.hide();
        this.openSnackbar('存擋/新增 成功');
        this.isEdit = false;
        this.isDelete = false;
      }, error => this.openSnackbar('存擋/新增 失敗'));
    } else {
      this.isEdit = false;
      this.isDelete = false;
    }
  }

  deleteItems(data) {
    const index = this.colsTab0Items.findIndex(i => i.name === data.name);
    this.colsTab0Items.splice(index, 1)
    this.colsTab0ItemsDefault = JSON.parse(JSON.stringify(this.colsTab0Items));
    this.isDelete  = true;
  }

  openPopup(pageNum) {
    const modalRef = this.modalService.open(ConfirmPopupComponent);
    modalRef.componentInstance.content = '您尚未存擋，是否要存擋！！';
    modalRef.componentInstance.closeBtn.subscribe(resp => this.isEdit = false);
    modalRef.componentInstance.saveBtn.subscribe(resp => this.saveTab(pageNum));
  }

  openSnackbar(text: string) {
    this.snackbarService.add({
      msg: `<strong>${text}</strong>`,
      timeout: 5000,
      action: {
        text: '',
        onClick: (snack) => {
          console.log('dismissed: ' + snack.id);
        },
      },
      // onAdd: (snack) => {
      //   console.log('added: ' + snack.id);
      // },
      // onRemove: (snack) => {
      //   console.log('removed: ' + snack.id);
      // }
    });
  }

  private comparisonUpdateData(oldData, newData, cols) {
    newData.forEach((item, index) => {
      cols.forEach(col => {
        if (oldData[index][col] !== newData[index][col]) { item.isUpdate = true; };
      });
    });
  }

  getFalseTabData() {
    // false data
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
