import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './side-nav/app-layout.component';
import {AppMaterialModule} from '../app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  declarations: [AppLayoutComponent],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
