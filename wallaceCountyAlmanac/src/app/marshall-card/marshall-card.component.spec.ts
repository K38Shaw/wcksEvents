import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarshallCardComponent } from './marshall-card.component';

describe('MarshallCardComponent', () => {
  let component: MarshallCardComponent;
  let fixture: ComponentFixture<MarshallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarshallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarshallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
