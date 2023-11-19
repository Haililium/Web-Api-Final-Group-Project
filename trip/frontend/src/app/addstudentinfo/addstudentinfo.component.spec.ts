import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentinfoComponent } from './addstudentinfo.component';

describe('AddstudentinfoComponent', () => {
  let component: AddstudentinfoComponent;
  let fixture: ComponentFixture<AddstudentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});