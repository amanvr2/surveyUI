import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { ManageSurveysComponent } from './manage-surveys/manage-surveys.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"manage-users", component: ManageUsersComponent},
  {path:"add-user", component: AddUserComponent},
  {path:"manage-surveys", component: ManageSurveysComponent},
  {path:"manage-questions/:id", component: ManageQuestionsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
