import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedAllComponent } from './issued-all.component';

describe('IssuedAllComponent', () => {
  let component: IssuedAllComponent;
  let fixture: ComponentFixture<IssuedAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
