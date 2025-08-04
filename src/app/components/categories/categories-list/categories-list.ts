import {Component, OnInit} from '@angular/core';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd, faSpinner, faEye, faList, faTags, faFilter } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {CategoryService} from '../../../services/category-service';
import {Category} from '../../../classes/category';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, NgbModalRef, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormNewCategory} from '../form-new-category/form-new-category';
import {FormEditCategory} from '../form-edit-category/form-edit-category';

@Component({
  selector: 'app-categories-list',
  standalone: false,
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.scss'
})
export class CategoriesList implements OnInit {

  public faUsers: IconDefinition = faUsers;
  public faUserTie: IconDefinition = faUserTie;
  public faCheck: IconDefinition = faCheck;
  public faTimes: IconDefinition = faTimes;
  public faPencil: IconDefinition = faPencil;
  public faAdd: IconDefinition = faAdd;
  public faSpinner: IconDefinition = faSpinner;
  public faEye: IconDefinition = faEye;
  public faList: IconDefinition = faList;
  public faTags: IconDefinition = faTags;
  public faFilter: IconDefinition = faFilter;

  public pageNumber: number = 1;
  public pageItems: number = 10;

  public loadingCategories: boolean = false;
  public categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private modal: NgbModal,
    private tooltipConfig: NgbTooltipConfig
  ) {
    tooltipConfig.container = "body";
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(): void {
    this.loadingCategories = true;
    this.categoryService.getAllCategories().then((categories) => {
      this.categories = categories;
      this.sortCategoriesById();
    }).catch(() => {
      this.toastr.error("Hubo un error al obtener las categorías");
    }).finally(() => {
      this.loadingCategories = false;
    });
  }

  public openNewCategoryModal(): void {
    this.modal.open(FormNewCategory, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    }).result.then((resolve) => {
      // Crear nueva categoría
      this.getCategories();
    }).catch((reject) => {
      // Cancelar
    });
  }

  public openEditCategoryModal(category: Category): void {
    const editCategoryModal: NgbModalRef = this.modal.open(FormEditCategory, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    });

    editCategoryModal.componentInstance.categoryId = category.id;
    editCategoryModal.componentInstance.categoryName = category.name;

    editCategoryModal.result.then((resolve) => {
      // Editar categoría
      this.getCategories();
    }).catch((reject) => {
      // Cancelar
    });
  }

  public openConfirmDeleteCategoryModal(categoryId: number, content: any): void {
    this.modal.open(content, {
      size: 'lg',
      centered: true
    }).result.then((resolve) => {
      this.categoryService.deleteCategory(categoryId).then((resolve) => {
        this.toastr.success("Categoría eliminada exitosamente");
        this.getCategories();
      }).catch((reject) => {
        this.toastr.error("Hubo un error al intentar eliminar la categoría");
      });
    }).catch((reject) => {
    });
  }

  public sortCategoriesById(): void {
    this.categories.sort((a, b) => {
      return a.id - b.id;
    });
  }

}
