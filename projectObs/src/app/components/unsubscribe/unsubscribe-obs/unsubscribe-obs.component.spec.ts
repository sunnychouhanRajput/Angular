import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeObsComponent } from './unsubscribe-obs.component';

describe('UnsubscribeObsComponent', () => {
  let component: UnsubscribeObsComponent;
  let fixture: ComponentFixture<UnsubscribeObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnsubscribeObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribeObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
