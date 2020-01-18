import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearAccountsComponent } from './year-accounts.component';

describe('YearAccountsComponent', () => {
  let component: YearAccountsComponent;
  let fixture: ComponentFixture<YearAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
