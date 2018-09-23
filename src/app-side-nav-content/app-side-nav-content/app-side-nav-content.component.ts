import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../app/reducers';
import { selectAllPosts } from '../../posts/posts.reducer';

@Component({
    selector: 'app-side-nav-content',
    templateUrl: './app-side-nav-content.component.html',
    styleUrls: ['./app-side-nav-content.component.css'],
})
export class AppSideNavContentComponent {
    public posts$;

    constructor(private store: Store<State>) {
        this.posts$ = this.store.pipe(select(selectAllPosts));
        this.posts$.subscribe(console.log);
    }
}
