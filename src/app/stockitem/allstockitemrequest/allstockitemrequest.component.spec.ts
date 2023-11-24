import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstockitemrequestComponent } from './allstockitemrequest.component';

describe('AllstockitemrequestComponent', () => {
  let component: AllstockitemrequestComponent;
  let fixture: ComponentFixture<AllstockitemrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstockitemrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstockitemrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
