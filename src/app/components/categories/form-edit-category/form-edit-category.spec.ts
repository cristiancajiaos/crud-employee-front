import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditCategory } from './form-edit-category';

describe('FormEditCategory', () => {
  let component: FormEditCategory;
  let fixture: ComponentFixture<FormEditCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
