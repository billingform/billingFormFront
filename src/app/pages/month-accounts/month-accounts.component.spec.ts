import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthAccountsComponent } from './month-accounts.component';

describe('MonthAccountsComponent', () => {
  let component: MonthAccountsComponent;
  let fixture: ComponentFixture<MonthAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
