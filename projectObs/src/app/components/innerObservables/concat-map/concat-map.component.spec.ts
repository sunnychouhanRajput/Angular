import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapComponent } from './concat-map.component';

describe('ConcatMapComponent', () => {
  let component: ConcatMapComponent;
  let fixture: ComponentFixture<ConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcatMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
