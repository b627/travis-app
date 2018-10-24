import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTileDetailComponent } from './dashboard-tile-detail.component';

describe('DashboardTileDetailComponent', () => {
  let component: DashboardTileDetailComponent;
  let fixture: ComponentFixture<DashboardTileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
