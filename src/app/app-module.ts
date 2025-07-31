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
import { FormNewEmployee } from './components/form-new-employee/form-new-employee';
import { FormEditEmployee } from './components/form-edit-employee/form-edit-employee';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { EmployeesList } from './components/employees-list/employees-list';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';
import { EmployeeDetail } from './components/employee-detail/employee-detail';

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
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
