import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementQuatationsComponent } from './procurement-quatations.component';

describe('ProcurementQuatationsComponent', () => {
  let component: ProcurementQuatationsComponent;
  let fixture: ComponentFixture<ProcurementQuatationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementQuatationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementQuatationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
