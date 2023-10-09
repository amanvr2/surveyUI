import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageSurveysComponent } from './manage-surveys/manage-surveys.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';


@NgModule({
  declarations: [	
    AppComponent,
      NavbarComponent,
      AdminLoginComponent,
      AdminDashboardComponent,
      ManageUsersComponent,
      AddUserComponent,
      ManageSurveysComponent,
      ManageQuestionsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
