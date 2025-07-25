import {Component, OnInit} from '@angular/core';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  public editEmployeeForm!: FormGroup;

  constructor(
    private modal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.editEmployeeForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  public saveUpdatedEmployee(): void {
    this.modal.close("");
  }

  public dismissModal(): void {
    this.modal.dismiss("");
  }
}
