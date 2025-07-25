import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbModal, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormNewEmployee} from '../form-new-employee/form-new-employee';
import {FormEditEmployee} from '../form-edit-employee/form-edit-employee';
import {Employee} from '../../classes/employee';
import {EmployeeService} from '../../services/employee-service';

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
  public faSpinner: IconDefinition = faSpinner;

  public loadingEmployees: boolean = false;
  public employees: Employee[] = [];

  constructor(
    private toastr: ToastrService,
    private modal: NgbModal,
    private tooltipConfig: NgbTooltipConfig,
    private employeeService: EmployeeService
  ) {
    tooltipConfig.container = "body";
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.loadingEmployees =  true;
    this.employees = [];
    this.employeeService.getEmployees().then((employees) => {
      this.employees = employees;
      this.loadingEmployees = false;
    }).catch((reject) => {
      this.toastr.error("Hubo un error al obtener los empleados");
    });
  }


  public openToastr(): void {
    this.toastr.success("Abrir Toastr");
  }

  public openTemplateModal(content: TemplateRef<any>): void {
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


