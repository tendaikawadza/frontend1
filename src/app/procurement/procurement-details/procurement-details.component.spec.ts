import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementDetailsComponent } from './procurement-details.component';

describe('ProcurementDetailsComponent', () => {
  let component: ProcurementDetailsComponent;
  let fixture: ComponentFixture<ProcurementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
