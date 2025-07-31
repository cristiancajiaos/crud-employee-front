import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EmployeeService} from '../../services/employee-service';
import {Location} from '@angular/common';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {Employee} from '../../classes/employee';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  standalone: false,
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.scss'
})
export class EmployeeDetail implements OnInit {

  public faSpinner: IconDefinition = faSpinner;
  public faArrowLeft: IconDefinition = faArrowLeft;

  public employeeId: number = 0;

  public loadingEmployee: boolean = false;

  public employeeFound!: Employee;
  public employeeNotFound: boolean = true;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  public getEmployee(): void {
    this.loadingEmployee = true;
    this.employeeId = Number(this.activatedRoute.snapshot.paramMap?.get('id'));
    this.employeeService.getEmployeeById(this.employeeId).then((employee) => {
      this.employeeFound = employee;
      this.employeeNotFound = false;
      this.loadingEmployee = false;
    }).catch(() => {
      this.loadingEmployee = false;
    });
  }

  public goBackToEmployeesList(): void {
    this.location.back();
  }
}
