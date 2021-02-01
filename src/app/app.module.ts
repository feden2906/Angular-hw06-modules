import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
      {path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)}
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
