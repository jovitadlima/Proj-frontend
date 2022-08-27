import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentappformsComponent } from './studentappforms.component';

describe('StudentappformsComponent', () => {
  let component: StudentappformsComponent;
  let fixture: ComponentFixture<StudentappformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentappformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentappformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
