import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToWatchComponent } from './plan-to-watch.component';

describe('PlanToWatchComponent', () => {
  let component: PlanToWatchComponent;
  let fixture: ComponentFixture<PlanToWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanToWatchComponent]
    });
    fixture = TestBed.createComponent(PlanToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
