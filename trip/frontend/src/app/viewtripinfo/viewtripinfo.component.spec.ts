import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtripinfoComponent } from './viewtripinfo.component';

describe('ViewtripinfoComponent', () => {
  let component: ViewtripinfoComponent;
  let fixture: ComponentFixture<ViewtripinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtripinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtripinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

