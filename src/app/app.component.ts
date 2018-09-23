import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadPosts } from '../posts/posts.actions';
import { Post } from '../posts/posts.reducer';
import { PostsService } from '../posts/posts.service';
import { State } from './reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    posts: Post[];

    constructor(private store: Store<State>, postsService: PostsService) {
        postsService.posts$.subscribe(posts => (this.posts = posts));
    }

    ngOnInit() {
        this.store.dispatch(new LoadPosts({ posts: this.posts }));
    }
}
