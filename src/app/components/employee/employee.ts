import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EmployeeService} from '../../services/employee-service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})
export class Employee implements OnInit {

  public employeeId: number = 0;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  public getEmployee(): void {
    this.employeeId = Number(this.activatedRoute.snapshot.paramMap?.get('id'));
  }

  public goBackToEmployeesList(): void {
    this.location.back();
  }
}
