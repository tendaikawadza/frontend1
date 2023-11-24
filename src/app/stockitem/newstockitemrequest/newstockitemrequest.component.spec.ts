import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstockitemrequestComponent } from './newstockitemrequest.component';

describe('NewstockitemrequestComponent', () => {
  let component: NewstockitemrequestComponent;
  let fixture: ComponentFixture<NewstockitemrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstockitemrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstockitemrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
