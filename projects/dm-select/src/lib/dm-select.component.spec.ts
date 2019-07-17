import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmSelectComponent } from './dm-select.component';

describe('DmSelectComponent', () => {
  let component: DmSelectComponent;
  let fixture: ComponentFixture<DmSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
