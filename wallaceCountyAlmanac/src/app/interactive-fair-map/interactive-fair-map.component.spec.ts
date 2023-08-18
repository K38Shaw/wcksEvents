import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveFairMapComponent } from './interactive-fair-map.component';

describe('InteractiveFairMapComponent', () => {
  let component: InteractiveFairMapComponent;
  let fixture: ComponentFixture<InteractiveFairMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveFairMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveFairMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
