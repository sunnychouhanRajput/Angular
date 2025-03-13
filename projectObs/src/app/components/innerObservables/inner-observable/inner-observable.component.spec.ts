import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerObservableComponent } from './inner-observable.component';

describe('InnerObservableComponent', () => {
  let component: InnerObservableComponent;
  let fixture: ComponentFixture<InnerObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
