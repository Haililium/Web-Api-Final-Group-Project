import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetripinfoComponent} from './updatetripinfo.component';

describe('UpdatetripComponent', () => {
  let component: UpdatetripinfoComponent;
  let fixture: ComponentFixture<UpdatetripinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetripinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetripinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
