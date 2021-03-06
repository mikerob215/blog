import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../app/reducers';
import { SideNavToggled } from '../state/app-layout.actions';

@Component({
    selector: 'app-side-nav',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.css'],
})
export class AppLayoutComponent {
    title = 'Terrible Ideas';
    public sideNavIsOpen$: Observable<boolean>;

    constructor(private store: Store<State>) {
        this.sideNavIsOpen$ = this.store.pipe(select('AppLayout', 'sideNavIsOpen'));
    }

    sideNavToggled(): void {
        this.store.dispatch(new SideNavToggled());
    }
}
