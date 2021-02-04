import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './posts/services/post.service';
import { PostComponent } from './posts/components/post/post.component';
import { PostsComponent } from './posts/components/posts/posts.component';
import { FullPostComponent } from './posts/components/full-post/full-post.component';
import { PostEditionComponent } from './posts/components/post-edition/post-edition.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PostComponent, PostsComponent, FullPostComponent, PostEditionComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  // exports: [HttpClientModule],
  providers: [PostService]
})
export class PostModule { }
