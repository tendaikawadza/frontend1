import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementMinutesComponent } from './procurement-minutes.component';

describe('ProcurementMinutesComponent', () => {
  let component: ProcurementMinutesComponent;
  let fixture: ComponentFixture<ProcurementMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementMinutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
