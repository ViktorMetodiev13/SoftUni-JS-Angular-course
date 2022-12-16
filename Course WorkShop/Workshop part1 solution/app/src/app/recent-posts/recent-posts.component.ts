import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from "../interfaces/Post";

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  posts: Post[] | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
