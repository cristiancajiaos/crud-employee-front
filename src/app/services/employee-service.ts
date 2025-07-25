import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../classes/employee';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = "http://localhost:8090/employees";

  constructor(
    private http: HttpClient
  ) {}

  public async getEmployees(): Promise<Employee[]> {
    return await lastValueFrom(this.http.get<Employee[]>(`${this.baseUrl}`));
  }

  public async getEmployeeById(employeeId: number): Promise<Employee> {
    return await lastValueFrom(this.http.get<Employee>(`${this.baseUrl}/${employeeId}`));
  }

  public async createEmployee(employee: Employee): Promise<Employee> {
    return await lastValueFrom(this.http.post<Employee>(
      `${this.baseUrl}`,
      employee,
      {
        headers: {
          'Content-Type':'application/json'
        }
      }
    ));
  }

  public async deleteEmployee(employeeId: number): Promise<Employee> {
    return await lastValueFrom(this.http.delete<Employee>(`${this.baseUrl}/${employeeId}`));
  }

}
