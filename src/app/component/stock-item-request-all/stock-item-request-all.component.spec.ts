import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemRequestAllComponent } from './stock-item-request-all.component';

describe('StockItemRequestAllComponent', () => {
  let component: StockItemRequestAllComponent;
  let fixture: ComponentFixture<StockItemRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemRequestAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
