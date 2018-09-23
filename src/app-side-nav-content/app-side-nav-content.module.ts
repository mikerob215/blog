import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppSideNavContentComponent } from './app-side-nav-content/app-side-nav-content.component';

@NgModule({
    imports: [CommonModule, AppMaterialModule],
    declarations: [AppSideNavContentComponent],
    exports: [AppSideNavContentComponent],
})
export class AppSideNavContentModule {}
