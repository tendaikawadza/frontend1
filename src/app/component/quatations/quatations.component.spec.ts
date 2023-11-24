import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatationsComponent } from './quatations.component';

describe('QuatationsComponent', () => {
  let component: QuatationsComponent;
  let fixture: ComponentFixture<QuatationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuatationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
