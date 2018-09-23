import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { RoutingModule } from '../routing/routing.module';
import { AppSideNavContentComponent } from './app-side-nav-content/app-side-nav-content.component';

@NgModule({
    imports: [CommonModule, AppMaterialModule, RoutingModule],
    declarations: [AppSideNavContentComponent],
    exports: [AppSideNavContentComponent],
})
export class AppSideNavContentModule {}
