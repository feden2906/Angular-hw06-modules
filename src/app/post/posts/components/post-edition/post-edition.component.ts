import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-post-edition',
  templateUrl: './post-edition.component.html',
  styleUrls: ['./post-edition.component.css']
})
export class PostEditionComponent implements OnInit {

  // @Input()
  post: Post;
  postEditionForm: FormGroup;

  // @Input()
  // editingPost;

  @Output()
  surfacing = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private formsModule: FormsModule, private formBuilder: FormBuilder) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as Post;
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.postEditionForm = this.formBuilder.group({
      title: new FormControl(this.post.title),
      body: new FormControl(this.post.body)
    });
  }

  saveForm(postEditionForm): void {
    const {title, body} = this.postEditionForm.value;
    const editedPost = {
      // id: this.editingPost.id, // как подтянуть ай-ди из родительской компоненты
      title,
      body
      };
      this.surfacing.emit(editedPost);// как передать значение
  }

}
