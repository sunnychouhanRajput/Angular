import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanReduceOperatorsComponent } from './scan-reduce-operators.component';

describe('ScanReduceOperatorsComponent', () => {
  let component: ScanReduceOperatorsComponent;
  let fixture: ComponentFixture<ScanReduceOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScanReduceOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanReduceOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
