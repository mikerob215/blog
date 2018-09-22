import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  title = 'Terrible Ideas';

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
