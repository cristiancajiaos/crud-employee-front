import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbModal, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormNewEmployee} from '../form-new-employee/form-new-employee';
import {FormEditEmployee} from '../form-edit-employee/form-edit-employee';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  providers: [NgbTooltipConfig]
})
export class Layout implements OnInit {

  public faUsers: IconDefinition = faUsers;
  public faUserTie: IconDefinition = faUserTie;
  public faCheck: IconDefinition = faCheck;
  public faTimes: IconDefinition = faTimes;
  public faPencil: IconDefinition = faPencil;
  public faAdd: IconDefinition = faAdd;

  constructor(
    private toastr: ToastrService,
    private modal: NgbModal,
    private tooltipConfig: NgbTooltipConfig
  ) {
    tooltipConfig.container = "body";
  }

  ngOnInit(): void {
  }

  public openToastr(): void {
    this.toastr.success("Abrir Toastr");
  }

  public openModal(content: TemplateRef<any>): void {
    this.modal.open(content, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    }).result.then((resolve) => {
      this.toastr.success("Borrar empleado");
    }).catch((reject) => {
      this.toastr.error("No borrar empleado");
    });
  }

  public openNewEmployeeForm(): void {
    this.modal.open(FormNewEmployee, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    }).result.then((resolve) => {
      this.toastr.success("Cerrado modal de nuevo empleado");
    }).catch((reject) => {
      this.toastr.error("Dismiss modal de nuevo empleado")
    });
  }

  public openEditEmployeeForm(): void {
    this.modal.open(FormEditEmployee, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    }).result.then((resolve) => {
      this.toastr.success("Cerrado modal de editar empleado");
    }).catch((reject) => {
      this.toastr.error("Dismiss modal de editar empleado")
    });
  }

}


