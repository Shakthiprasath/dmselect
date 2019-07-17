import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesingLibComponent } from './tesing-lib.component';

describe('TesingLibComponent', () => {
  let component: TesingLibComponent;
  let fixture: ComponentFixture<TesingLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesingLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
