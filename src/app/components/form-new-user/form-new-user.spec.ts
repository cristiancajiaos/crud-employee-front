import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewUser } from './form-new-user';

describe('FormNewUser', () => {
  let component: FormNewUser;
  let fixture: ComponentFixture<FormNewUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNewUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
