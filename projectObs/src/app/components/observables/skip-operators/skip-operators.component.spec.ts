import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipOperatorsComponent } from './skip-operators.component';

describe('SkipOperatorsComponent', () => {
  let component: SkipOperatorsComponent;
  let fixture: ComponentFixture<SkipOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkipOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
