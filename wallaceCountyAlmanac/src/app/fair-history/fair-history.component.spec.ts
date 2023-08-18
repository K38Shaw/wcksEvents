import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairHistoryComponent } from './fair-history.component';

describe('FairHistoryComponent', () => {
  let component: FairHistoryComponent;
  let fixture: ComponentFixture<FairHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
