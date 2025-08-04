import {Component, Input, OnInit} from '@angular/core';
import { faTimes, faPencil, faTags } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../services/category-service';
import {ToastrService} from 'ngx-toastr';

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
    this.editCategoryForm = this.fb.group({});
  }

  public closeModal(): void {
    this.modal.close('');
  }

  public dismissModal(): void {
    this.modal.dismiss('');
  }
}
