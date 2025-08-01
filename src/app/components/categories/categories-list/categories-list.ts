import {Component, OnInit} from '@angular/core';
import { faUsers, faUserTie, faCheck, faTimes, faPencil, faAdd, faSpinner, faEye, faList, faTags } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';

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

  ngOnInit(): void {
  }

}
