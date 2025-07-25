import {Component, OnInit} from '@angular/core';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private modal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

  public saveUpdatedEmployee(): void {
    this.modal.close("");
  }

  public dismissModal(): void {
    this.modal.dismiss("");
  }
}
