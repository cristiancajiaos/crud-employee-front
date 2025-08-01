import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesList} from './components/employees/employees-list/employees-list';
import {NotFound} from './components/not-found/not-found';
import {Home} from './components/home/home';
import {EmployeeDetail} from './components/employees/employee-detail/employee-detail';

const routes: Routes = [
  {
    path: 'home',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'employees-list',
    component: EmployeesList,
    pathMatch: 'full'
  },
  {
    path: 'employee/:id',
    component: EmployeeDetail,
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: NotFound,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
