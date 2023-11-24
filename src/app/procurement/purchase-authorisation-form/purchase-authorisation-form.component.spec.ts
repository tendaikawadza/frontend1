import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAuthorisationFormComponent } from './purchase-authorisation-form.component';

describe('PurchaseAuthorisationFormComponent', () => {
  let component: PurchaseAuthorisationFormComponent;
  let fixture: ComponentFixture<PurchaseAuthorisationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseAuthorisationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseAuthorisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
