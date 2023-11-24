import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedViewComponent } from './issued-view.component';

describe('IssuedViewComponent', () => {
  let component: IssuedViewComponent;
  let fixture: ComponentFixture<IssuedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
