import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class SubjectPostService {

  private postContext = new BehaviorSubject<Post>(null);

  constructor() { }

  getNewPostContext(): BehaviorSubject<Post> {
    return this.postContext;
  }

  setNewPostContext(newContext: Post): void {
    this.postContext.next(newContext);
  }

}


// getNewPostContext(): Post {
//   return this.postContext.getValue();
// }
