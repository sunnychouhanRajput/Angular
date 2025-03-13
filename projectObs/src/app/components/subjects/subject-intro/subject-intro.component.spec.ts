import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectIntroComponent } from './subject-intro.component';

describe('SubjectIntroComponent', () => {
  let component: SubjectIntroComponent;
  let fixture: ComponentFixture<SubjectIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
