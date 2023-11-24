import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemrequestDetailsComponent } from './stockitemrequest-details.component';

describe('StockitemrequestDetailsComponent', () => {
  let component: StockitemrequestDetailsComponent;
  let fixture: ComponentFixture<StockitemrequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockitemrequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockitemrequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
