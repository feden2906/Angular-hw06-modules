import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {FullUserComponent} from './components/full-user/full-user.component';
import {UserEditionComponent} from './components/user-edition/user-edition.component';

const routes: Routes = [
  {
    //   /users
    path: '', component: UsersComponent, children: [{
      //  users/id=1...10
      path: ':id', component: FullUserComponent, children: [{
        path: 'edit', component: UserEditionComponent
      }]
    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
