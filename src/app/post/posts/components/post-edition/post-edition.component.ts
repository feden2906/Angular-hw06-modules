import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';
import {SubjectPostService} from '../../services/subject-post.service';

@Component({
  selector: 'app-post-edition',
  templateUrl: './post-edition.component.html',
  styleUrls: ['./post-edition.component.css']
})
export class PostEditionComponent implements OnInit {

  post: Post;
  postEditionForm: FormGroup;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formsModule: FormsModule,
              private formBuilder: FormBuilder,
              private subjectPostService: SubjectPostService) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as Post;
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.postEditionForm = this.formBuilder.group({
      id: new FormControl(this.post.id),
      title: new FormControl(this.post.title),
      body: new FormControl(this.post.body)
    });
  }

  saveForm(postEditionForm): void {
    this.subjectPostService.setNewPostContext(postEditionForm.value);
    console.log(postEditionForm.value);
  }

}









// @Output()
// surfacing = new EventEmitter();

// from saveform
// const {title, body} = this.postEditionForm.value;
// const editedPost = {
  // id: this.editingPost.id, // как подтянуть ай-ди из родительской компоненты
//   title,
//   body
// };
// this.surfacing.emit(editedPost);// как передать значение
