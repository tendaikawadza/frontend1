import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemrequestComponent } from './stockitemrequest.component';

describe('StockitemrequestComponent', () => {
  let component: StockitemrequestComponent;
  let fixture: ComponentFixture<StockitemrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockitemrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockitemrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
