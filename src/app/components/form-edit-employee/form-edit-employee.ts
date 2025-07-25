import {Component, Input, OnInit} from '@angular/core';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../services/employee-service';
import {Employee} from '../../classes/employee';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-form-edit-employee',
  standalone: false,
  templateUrl: './form-edit-employee.html',
  styleUrl: './form-edit-employee.scss'
})
export class FormEditEmployee implements OnInit {

  public faUsers: IconDefinition = faUsers;
  public faUserTie: IconDefinition = faUserTie;
  public faCheck: IconDefinition = faCheck;
  public faTimes: IconDefinition = faTimes;
  public faPencil: IconDefinition = faPencil;
  public faAdd: IconDefinition = faAdd;
  public faSpinner: IconDefinition = faSpinner;

  public editEmployeeForm!: FormGroup;

  public loadingEmployee: boolean = false;
  public currentEmployee!: Employee;

  @Input() employeeId!: number;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.editEmployeeForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

    if (this.employeeId) {
      this.getEmployee();
    }
  }

  public getEmployee(): void {
    this.loadingEmployee = true;
    this.employeeService.getEmployeeById(this.employeeId).then((employee) => {
      this.currentEmployee = employee;

      this.editEmployeeForm.controls['fullName'].setValue(this.currentEmployee.fullName);
      this.editEmployeeForm.controls['username'].setValue(this.currentEmployee.username);
      this.editEmployeeForm.controls['email'].setValue(this.currentEmployee.email);
      this.editEmployeeForm.controls['password'].setValue(this.currentEmployee.password);
    }).catch((reject) => {
      this.toastr.error("Error al obtener los datos del empleado");
      this.dismissModal();
    });
  }

  public saveUpdatedEmployee(): void {
    let updatedEmployee = new Employee();

    updatedEmployee.fullName = this.editEmployeeForm.value['fullName'];
    updatedEmployee.username = this.editEmployeeForm.value['username'];
    updatedEmployee.email = this.editEmployeeForm.value['email'];
    updatedEmployee.password = this.editEmployeeForm.value['password'];

    this.employeeService.updateEmployee(this.employeeId, updatedEmployee).then((employee) => {
      this.toastr.success("Se ha editado el empleado exitosamente");
      this.closeModal();
    }).catch((reject) => {
      this.toastr.error("Hubo un error al editar el empleado");
    });
  }

  public closeModal(): void {
    this.modal.close('');
  }

  public dismissModal(): void {
    this.modal.dismiss("");
  }
}
