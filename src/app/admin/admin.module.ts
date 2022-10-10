import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserListComponent
  ],



  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
