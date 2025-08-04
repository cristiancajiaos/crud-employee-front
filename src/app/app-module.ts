import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Layout } from './components/layout/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormNewEmployee } from './components/employees/form-new-employee/form-new-employee';
import { FormEditEmployee } from './components/employees/form-edit-employee/form-edit-employee';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { EmployeesList } from './components/employees/employees-list/employees-list';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';
import { EmployeeDetail } from './components/employees/employee-detail/employee-detail';
import { Footer } from './components/shared/footer/footer';
import { Header } from './components/shared/header/header';
import { CategoriesList } from './components/categories/categories-list/categories-list';
import { Navbar } from './components/shared/navbar/navbar';
import { FormNewCategory } from './components/categories/form-new-category/form-new-category';
import { FormEditCategory } from './components/categories/form-edit-category/form-edit-category';
import { FocusMe } from './directives/focus-me';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    App,
    Layout,
    FormNewEmployee,
    FormEditEmployee,
    EmployeeDetail,
    EmployeesList,
    NotFound,
    Home,
    Footer,
    Header,
    CategoriesList,
    Navbar,
    FormNewCategory,
    FormEditCategory,
    FocusMe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
