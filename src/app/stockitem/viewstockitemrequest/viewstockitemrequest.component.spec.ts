import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockitemrequestComponent } from './viewstockitemrequest.component';

describe('ViewstockitemrequestComponent', () => {
  let component: ViewstockitemrequestComponent;
  let fixture: ComponentFixture<ViewstockitemrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstockitemrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstockitemrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
