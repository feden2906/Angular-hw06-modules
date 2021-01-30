import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './posts/services/post.service';
import { PostComponent } from './posts/components/post/post.component';
import { PostsComponent } from './posts/components/posts/posts.component';
import { FullPostComponent } from './posts/components/full-post/full-post.component';


@NgModule({
  declarations: [PostComponent, PostsComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  // exports: [HttpClientModule],
  providers: [PostService]
})
export class PostModule { }
