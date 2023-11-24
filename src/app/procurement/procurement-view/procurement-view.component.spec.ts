import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementViewComponent } from './procurement-view.component';

describe('ProcurementViewComponent', () => {
  let component: ProcurementViewComponent;
  let fixture: ComponentFixture<ProcurementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
