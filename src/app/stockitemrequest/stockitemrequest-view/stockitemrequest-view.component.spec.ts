import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemrequestViewComponent } from './stockitemrequest-view.component';

describe('StockitemrequestViewComponent', () => {
  let component: StockitemrequestViewComponent;
  let fixture: ComponentFixture<StockitemrequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockitemrequestViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockitemrequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
