import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppSideNavContentModule } from '../app-side-nav-content/app-side-nav-content.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, AppSideNavContentModule],
  declarations: [AppLayoutComponent],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {
}
