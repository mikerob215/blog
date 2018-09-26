import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { SideNavToggled } from '../../app-layout/state/app-layout.actions';
import { State } from '../../app/reducers';
import { selectAllPosts } from '../../posts/posts.reducer';

@Component({
    selector: 'app-side-nav-content',
    templateUrl: './app-side-nav-content.component.html',
    styleUrls: ['./app-side-nav-content.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSideNavContentComponent implements OnInit {
    public posts$;

    constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) {
        this.posts$ = this.store.pipe(select(selectAllPosts));
        this.posts$.subscribe(console.log);
    }

    ngOnInit() {}

    linkClicked() {
        return this.store.dispatch(new SideNavToggled());
    }
}
