import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementMinutesAllComponent } from './procurement-minutes-all.component';

describe('ProcurementMinutesAllComponent', () => {
  let component: ProcurementMinutesAllComponent;
  let fixture: ComponentFixture<ProcurementMinutesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementMinutesAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementMinutesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
