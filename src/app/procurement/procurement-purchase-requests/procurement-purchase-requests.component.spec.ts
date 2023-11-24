import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementPurchaseRequestsComponent } from './procurement-purchase-requests.component';

describe('ProcurementPurchaseRequestsComponent', () => {
  let component: ProcurementPurchaseRequestsComponent;
  let fixture: ComponentFixture<ProcurementPurchaseRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementPurchaseRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementPurchaseRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
