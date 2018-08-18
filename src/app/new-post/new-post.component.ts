import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private postsService: PostsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onCreatePost() {
    const title = this.postForm.value['title'];
    const content = this.postForm.value['content'];
    const post = new Post(title, content);
    this.postsService.addPost(post);
    this.router.navigate(['/posts']);

  }
}
