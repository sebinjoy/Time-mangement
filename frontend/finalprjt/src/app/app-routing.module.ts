import { mergeNsAndName } from '@angular/compiler';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTaskDetailsComponent } from './admin-task-details/admin-task-details.component';
import { AdminTaskListComponent } from './admin-task-list/admin-task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ManagerComponent } from './manager/manager.component';
import { TaskComponent } from './task/task.component';
import { UserDashViewComponent } from './user-dash-view/user-dash-view.component';
import { UserComponent } from './user/user.component';
import { UserdashComponent } from './userdash/userdash.component';


const routes: Routes = [
  { path:'user', component: UserComponent},
  {path:'manager',component:ManagerComponent},
  {path:'task',component:TaskComponent},
  {path:'createTask',component:CreateTaskComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'userdash',component:UserdashComponent},
  {path:'admin-task-list',component:AdminTaskListComponent},
  {path:'admin-task-details',component:AdminTaskDetailsComponent},
  {path:'demo',component:DemoComponent},
  {path:'main',component:MainComponent},
  {path:'UserDashView',component:UserDashViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[UserComponent,ManagerComponent]