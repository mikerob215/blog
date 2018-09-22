import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {SideNavToggled, State} from '../../app/reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  title = 'Terrible Ideas';
  public sideNavIsOpen$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.sideNavIsOpen$ = this.store.pipe(select('sideNavState', 'sideNavIsOpen'));
  }

  ngOnInit() {
    this.sideNavIsOpen$.subscribe(console.log);
  }

  sideNavToggled() {
    this.store.dispatch(new SideNavToggled());
  }
}
