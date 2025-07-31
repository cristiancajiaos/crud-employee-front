import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import { faArrowLeft, faUserTie, faList } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-not-found',
  standalone: false,
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound implements OnInit {

  public faArrowLeft: IconDefinition = faArrowLeft;
  public faUserTie: IconDefinition = faUserTie;
  public faList: IconDefinition = faList;

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public goBack(): void {
    this.location.back();
  }

  public goToEmployeesList(): void {
    this.router.navigateByUrl('employees-list')
  }

}
