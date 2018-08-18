import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: Array<Post>;
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => { 
        this.posts = posts; 
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
