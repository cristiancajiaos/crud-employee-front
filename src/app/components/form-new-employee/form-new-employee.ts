import {Component, Input, OnInit} from '@angular/core';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../classes/employee';
import {EmployeeService} from '../../services/employee-service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-form-new-employee',
  standalone: false,
  templateUrl: './form-new-employee.html',
  styleUrl: './form-new-employee.scss'
})
export class FormNewEmployee implements OnInit {

  public faUsers: IconDefinition = faUsers;
  public faUserTie: IconDefinition = faUserTie;
  public faCheck: IconDefinition = faCheck;
  public faTimes: IconDefinition = faTimes;
  public faPencil: IconDefinition = faPencil;
  public faAdd: IconDefinition = faAdd;

  public newEmployeeForm!: FormGroup;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.newEmployeeForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  public saveNewEmployee(): void {
    let newEmployee = new Employee();

    newEmployee.fullName = this.newEmployeeForm.value['fullName'];
    newEmployee.username = this.newEmployeeForm.value['username'];
    newEmployee.email = this.newEmployeeForm.value['email'];
    newEmployee.password = this.newEmployeeForm.value['password'];

    this.employeeService.createEmployee(newEmployee).then((employee) => {
      this.toastr.success("Nuevo empleado creado exitosamente");
      this.closeModal();
    }).catch((reject) => {
      this.toastr.error("Hubo un error al crear el empleado");
    });
  }

  public closeModal(): void {
    this.modal.close("");
  }

  public dismissModal(): void {
    this.modal.dismiss("");
  }
}
