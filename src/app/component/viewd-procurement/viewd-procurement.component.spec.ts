import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdProcurementComponent } from './viewd-procurement.component';

describe('ViewdProcurementComponent', () => {
  let component: ViewdProcurementComponent;
  let fixture: ComponentFixture<ViewdProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdProcurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
