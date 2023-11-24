import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemRequestNewComponent } from './stock-item-request-new.component';

describe('StockItemRequestNewComponent', () => {
  let component: StockItemRequestNewComponent;
  let fixture: ComponentFixture<StockItemRequestNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemRequestNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemRequestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
