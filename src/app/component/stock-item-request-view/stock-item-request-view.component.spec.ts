import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemRequestViewComponent } from './stock-item-request-view.component';

describe('StockItemRequestViewComponent', () => {
  let component: StockItemRequestViewComponent;
  let fixture: ComponentFixture<StockItemRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemRequestViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
