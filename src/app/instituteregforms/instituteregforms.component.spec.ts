import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteregformsComponent } from './instituteregforms.component';

describe('InstituteregformsComponent', () => {
  let component: InstituteregformsComponent;
  let fixture: ComponentFixture<InstituteregformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteregformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteregformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
