import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd, faSpinner, faEye, faList } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbModal, NgbModalRef, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormNewEmployee} from '../form-new-employee/form-new-employee';
import {FormEditEmployee} from '../form-edit-employee/form-edit-employee';
import {Employee} from '../../../classes/employee';
import {EmployeeService} from '../../../services/employee-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: false,
  templateUrl: './employees-list.html',
  styleUrl: './employees-list.scss'
})
export class EmployeesList implements OnInit  {

  public faUsers: IconDefinition = faUsers;
  public faUserTie: IconDefinition = faUserTie;
  public faCheck: IconDefinition = faCheck;
  public faTimes: IconDefinition = faTimes;
  public faPencil: IconDefinition = faPencil;
  public faAdd: IconDefinition = faAdd;
  public faSpinner: IconDefinition = faSpinner;
  public faEye: IconDefinition = faEye;
  public faList: IconDefinition = faList;

  public loadingEmployees: boolean = false;
  public employees: Employee[] = [];

  constructor(
    private toastr: ToastrService,
    private modal: NgbModal,
    private tooltipConfig: NgbTooltipConfig,
    private employeeService: EmployeeService,
    private router: Router
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
      this.sortEmployeesById();
    }).catch((reject) => {
      this.toastr.error("Hubo un error al obtener los empleados");
    }).finally(() => {
      this.loadingEmployees = false;
    });
  }


  public openToastr(): void {
    this.toastr.success("Abrir Toastr");
  }

  public openDeleteEmployeeModal(employeeId: number, content: TemplateRef<any>): void {
    this.modal.open(content, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    }).result.then((resolve) => {
      // Si
      this.employeeService.deleteEmployee(employeeId).then((employee) => {
        this.toastr.success("Empleado eliminado exitosamente");
        this.getEmployees();
      }).catch((reject) => {
        this.toastr.error("Hubo un error al intentar eliminar el empleado");
      });
    }).catch((reject) => {
      // No
    });
  }

  public openNewEmployeeForm(): void {
    this.modal.open(FormNewEmployee, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    }).result.then((resolve) => {
      // Crear nuevo empleado
      this.getEmployees();
    }).catch((reject) => {
      // Cancelar
    });
  }

  public openSeeEmployeeInfo(employeeId: number): void {
    this.router.navigateByUrl(`employee/${employeeId}`);
  }

  public openEditEmployeeForm(employeeId: number): void {
    const modalEdit: NgbModalRef = this.modal.open(FormEditEmployee, {
      size: 'lg',
      backdrop: 'static',
      centered: true
    });
    modalEdit.componentInstance.employeeId = employeeId;

    modalEdit.result.then((resolve) => {
      // Editar empleado
      this.getEmployees();
    }).catch((reject) => {
      // Cancelar
    });
  }

  public sortEmployeesById(): void {
    this.employees.sort((a, b) => {
      return a.id - b.id;
    });
  }

}
