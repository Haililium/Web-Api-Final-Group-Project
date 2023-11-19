import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestudentinfoComponent} from './updatestudentinfo.component';

describe('UpdatestudentinfoComponent', () => {
  let component: UpdatestudentinfoComponent;
  let fixture: ComponentFixture<UpdatestudentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestudentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
