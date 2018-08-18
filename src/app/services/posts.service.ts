import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import {Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService implements OnInit {

  posts: Post[];
  postSubject = new Subject<Post[]>();

  constructor() { 
    this.getPosts();
   }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  ngOnInit() {
    
  }
  
  getPosts() {
    firebase.database().ref('/posts').on('value', 
      (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  postLoved(index) {
    this.posts[index].loveIts++;
    this.savePosts();    
  }

  postNotLoved(index) {
    this.posts[index].loveIts--;
    this.savePosts();    
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();    
    this.emitPosts();
  }

  removePost(postIndex){
    this.posts.splice(postIndex, 1);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);    
  }

}
