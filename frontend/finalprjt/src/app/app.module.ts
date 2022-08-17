import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import  {FormsModule,ReactiveFormsModule} from '@angular/forms';
 import { UserComponent } from './user/user.component';
 import { ManagerComponent } from './manager/manager.component';
import { TaskComponent } from './task/task.component';

// from video , include in the provider
import {ApiServiceService} from './api-service.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HomeComponent } from './home/home.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdminTaskListComponent } from './admin-task-list/admin-task-list.component';
import { AdminTaskDetailsComponent } from './admin-task-details/admin-task-details.component';
import { DemoComponent } from './demo/demo.component';
import { MainComponent } from './main/main.component';
import { PipePipe } from './pipe.pipe';
import { UserDashViewComponent } from './user-dash-view/user-dash-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // routingComponents
    UserComponent,
    ManagerComponent,
    TaskComponent,
    CreateTaskComponent,
    HomeComponent,
    UserdashComponent,
    AdminTaskListComponent,
    AdminTaskDetailsComponent,
    DemoComponent,
    MainComponent,
    PipePipe,
    UserDashViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


