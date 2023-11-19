import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentinfoComponent } from './viewstudentinfo.component';

describe('ViewstudentinfoComponent', () => {
  let component: ViewstudentinfoComponent;
  let fixture: ComponentFixture<ViewstudentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstudentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

