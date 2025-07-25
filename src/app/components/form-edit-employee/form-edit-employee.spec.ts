import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEmployee } from './form-edit-employee';

describe('FormEditEmployee', () => {
  let component: FormEditEmployee;
  let fixture: ComponentFixture<FormEditEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
