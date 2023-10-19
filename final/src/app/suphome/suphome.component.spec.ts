import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuphomeComponent } from './suphome.component';

describe('SuphomeComponent', () => {
  let component: SuphomeComponent;
  let fixture: ComponentFixture<SuphomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuphomeComponent]
    });
    fixture = TestBed.createComponent(SuphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
