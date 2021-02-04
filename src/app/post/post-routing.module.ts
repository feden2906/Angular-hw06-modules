import {NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/components/posts/posts.component';
import {FullPostComponent} from './posts/components/full-post/full-post.component';
import {PostEditionComponent} from './posts/components/post-edition/post-edition.component';
import {Post} from './posts/models/Post';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: FullPostComponent, children: [
          {path: 'edit', component: PostEditionComponent}
        ]}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
