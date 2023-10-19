import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupheaderComponent } from './supheader.component';

describe('SupheaderComponent', () => {
  let component: SupheaderComponent;
  let fixture: ComponentFixture<SupheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupheaderComponent]
    });
    fixture = TestBed.createComponent(SupheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
