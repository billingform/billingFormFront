import { MenuService } from './../../services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuInfo } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuInfo[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.getMenuList();
  }

  clickItem(item) {
    this.menuList.forEach(i => i.active = false);
    item.active = true;
    this.router.navigate([`pages/${item.url}`])
  }

  getMenuList() {
    this.menuService.getMenu().subscribe((resp: MenuInfo[]) => {
      this.menuList = resp;
      const pathName = this.router.url.split("/")[2];
      this.menuList.find(i => i.url === pathName).active = true;
    });
  }
}
