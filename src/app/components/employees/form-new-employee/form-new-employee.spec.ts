import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewEmployee } from './form-new-employee';

describe('FormNewEmployee', () => {
  let component: FormNewEmployee;
  let fixture: ComponentFixture<FormNewEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNewEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
