import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtripinfoComponent } from './addtripinfo.component';

describe('AddtripinfoComponent', () => {
  let component: AddtripinfoComponent;
  let fixture: ComponentFixture<AddtripinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtripinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtripinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});