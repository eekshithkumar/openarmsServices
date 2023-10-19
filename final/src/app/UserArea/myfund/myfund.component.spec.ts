import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfundComponent } from './myfund.component';

describe('MyfundComponent', () => {
  let component: MyfundComponent;
  let fixture: ComponentFixture<MyfundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfundComponent]
    });
    fixture = TestBed.createComponent(MyfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
