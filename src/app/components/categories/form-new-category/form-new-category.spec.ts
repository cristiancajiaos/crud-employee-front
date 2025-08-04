import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCategory } from './form-new-category';

describe('FormNewCategory', () => {
  let component: FormNewCategory;
  let fixture: ComponentFixture<FormNewCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNewCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
