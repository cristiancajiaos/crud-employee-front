import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { faTimes, faAdd, faTags } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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

  public newCategoryForm!: FormGroup;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.newCategoryForm = this.fb.group({
      categoryName: new FormControl('')
    });
  }

  public saveNewCategory(): void {
    this.closeModal();
  }

  public closeModal(): void {
    this.modal.close('');
  }

  public dismissModal(): void {
    this.modal.dismiss('');
  }
}
