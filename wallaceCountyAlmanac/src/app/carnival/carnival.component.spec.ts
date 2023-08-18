import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnivalComponent } from './carnival.component';

describe('CarnivalComponent', () => {
  let component: CarnivalComponent;
  let fixture: ComponentFixture<CarnivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
