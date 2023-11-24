import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedAddComponent } from './issued-add.component';

describe('IssuedAddComponent', () => {
  let component: IssuedAddComponent;
  let fixture: ComponentFixture<IssuedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
