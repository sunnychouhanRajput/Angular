import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherOperatorsComponent } from './other-operators.component';

describe('OtherOperatorsComponent', () => {
  let component: OtherOperatorsComponent;
  let fixture: ComponentFixture<OtherOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
