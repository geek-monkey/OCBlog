import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() postIndex: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  postLoved() {
    this.postsService.postLoved(this.postIndex);
  }

  postNotLoved() {
    this.postsService.postNotLoved(this.postIndex);
  }

  onRemovePost() {
    this.postsService.removePost(this.postIndex);
  }

}
