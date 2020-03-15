import { MenuService } from './../../services/menu.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList = MenuList;

  constructor(
    private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.getMenuList();
  }

  clickItem(item) {
    this.menuList.forEach(i => i.active = false);
    item.active = true;
    this.router.navigate([`pages/${item.path}`])
  }

  getMenuList(){
    this.menuService.getMenu().subscribe(resp => {
      console.log(resp);
    });
  }
}

// false datas
const MenuList = [
  { id: 1, name: '出單功能', active: true, path: 'billing' },
  { id: 2, name: '每月報表', active: false, path: 'monthAccounts' },
  { id: 3, name: '年度報表', active: false, path: 'yearAccounts' },
  { id: 4, name: '設定', active: false, path: 'setting' }
]