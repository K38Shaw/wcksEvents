import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandMarshallsComponent } from './grand-marshalls.component';

describe('GrandMarshallsComponent', () => {
  let component: GrandMarshallsComponent;
  let fixture: ComponentFixture<GrandMarshallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandMarshallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandMarshallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
