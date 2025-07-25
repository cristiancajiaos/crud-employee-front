import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditUser } from './form-edit-user';

describe('FormEditUser', () => {
  let component: FormEditUser;
  let fixture: ComponentFixture<FormEditUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
