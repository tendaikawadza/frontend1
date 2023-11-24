import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemrequestAddComponent } from './stockitemrequest-add.component';

describe('StockitemrequestAddComponent', () => {
  let component: StockitemrequestAddComponent;
  let fixture: ComponentFixture<StockitemrequestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockitemrequestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockitemrequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
