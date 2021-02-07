import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { FullUserComponent } from './components/full-user/full-user.component';
import { UserEditionComponent } from './components/user-edition/user-edition.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, UserComponent, FullUserComponent, UserEditionComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [HttpClientModule],
  providers: [UserService]
})
export class UserModule { }
