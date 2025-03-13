import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastOperatorsComponent } from './first-last-operators.component';

describe('FirstLastOperatorsComponent', () => {
  let component: FirstLastOperatorsComponent;
  let fixture: ComponentFixture<FirstLastOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstLastOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLastOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
