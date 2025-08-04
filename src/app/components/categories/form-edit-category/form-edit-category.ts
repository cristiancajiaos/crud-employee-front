import {Component, Input, OnInit} from '@angular/core';
import { faTimes, faPencil, faTags } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../services/category-service';
import {ToastrService} from 'ngx-toastr';
import {Category} from '../../../classes/category';

@Component({
  selector: 'app-form-edit-category',
  standalone: false,
  templateUrl: './form-edit-category.html',
  styleUrl: './form-edit-category.scss'
})
export class FormEditCategory implements OnInit {

  @Input() categoryId: number = 0;
  @Input() categoryName: string = '';

  public faTags: IconDefinition = faTags;
  public faPencil: IconDefinition = faPencil;
  public faTimes: IconDefinition = faTimes;

  public editCategoryForm!: FormGroup

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.editCategoryForm = this.fb.group({
      categoryName: new FormControl('', [Validators.required])
    });

    this.setFormValues();
  }

  public setFormValues(): void {
    this.editCategoryForm.controls['categoryName'].setValue(this.categoryName);
  }

  public editCategory(): void {
    const editedCategory = new Category();
    editedCategory.id = this.categoryId;
    editedCategory.name = this.categoryName;

    // this.toastr.success("Categoría editada exitosamente");
    this.toastr.success(editedCategory.toString());
    this.closeModal();
  }

  public closeModal(): void {
    this.modal.close('');
  }

  public dismissModal(): void {
    this.modal.dismiss('');
  }
}
