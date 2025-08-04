import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { faTimes, faAdd, faTags } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../services/category-service';
import {Category} from '../../../classes/category';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-form-new-category',
  standalone: false,
  templateUrl: './form-new-category.html',
  styleUrl: './form-new-category.scss'
})
export class FormNewCategory implements OnInit {

  public faTags: IconDefinition = faTags;
  public faAdd: IconDefinition = faAdd;
  public faTimes: IconDefinition = faTimes;

  public foo!: FormControl;

  public newCategoryForm!: FormGroup;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.foo = new FormControl('', [Validators.required]);

    this.newCategoryForm = this.fb.group({
      categoryName: new FormControl('', [Validators.required])
    });
  }

  public saveNewCategory(): void {
    const newCategory: Category = new Category();

    newCategory.name = this.newCategoryForm.value['categoryName'];

    this.categoryService.createNewCategory(newCategory).then((resolve) => {
      this.toastr.success("Nueva categoría creada exitosamente");
      this.closeModal();
    }).catch((reject) => {
      this.toastr.error("Hubo un error al intentar crear la nueva categoría");
    });
  }

  public closeModal(): void {
    this.modal.close('');
  }

  public dismissModal(): void {
    this.modal.dismiss('');
  }
}
