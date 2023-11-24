import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditPurchaseRequestsComponent } from './audit-purchase-requests.component';

describe('AuditPurchaseRequestsComponent', () => {
  let component: AuditPurchaseRequestsComponent;
  let fixture: ComponentFixture<AuditPurchaseRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditPurchaseRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditPurchaseRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
