import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './posts.reducer';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    posts$: Observable<Post[]> = of([
        {
            id: 1,
            title: 'First',
            content: 'First fake post',
        },
    ]);

    constructor() {}
}
