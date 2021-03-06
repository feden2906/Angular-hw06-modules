import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {SubjectPostService} from '../../services/subject-post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private subjectService: SubjectPostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.subjectService.getNewPostContext().subscribe(editedPost => {
      if (editedPost) {

      const arr = this.posts.filter(({id}) => editedPost.id !== id);
      arr.push(editedPost);
      arr.sort((a, b) => a.id - b.id);
      this.posts = arr;
      }
    });
  }

}
