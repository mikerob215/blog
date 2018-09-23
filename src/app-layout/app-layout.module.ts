import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppLayoutComponent} from './side-nav/app-layout.component';
import {AppMaterialModule} from '../app-material/app-material.module';
import {AppSideNavContentModule} from '../app-side-nav-content/app-side-nav-content.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppSideNavContentModule,
  ],
  declarations: [AppLayoutComponent],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
