import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppSideNavContentModule } from '../app-side-nav-content/app-side-nav-content.module';
import { RoutingModule } from '../routing/routing.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
    imports: [CommonModule, AppMaterialModule, AppSideNavContentModule, RoutingModule],
    declarations: [AppLayoutComponent],
    exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
