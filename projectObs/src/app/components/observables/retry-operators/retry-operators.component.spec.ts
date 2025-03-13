import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryOperatorsComponent } from './retry-operators.component';

describe('RetryOperatorsComponent', () => {
  let component: RetryOperatorsComponent;
  let fixture: ComponentFixture<RetryOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetryOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
