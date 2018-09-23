import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSideNavContentComponent } from '../app-side-nav-content/app-side-nav-content/app-side-nav-content.component';
import { HomeComponent } from '../main-content/home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
  {
    path: 'posts',
    component: AppSideNavContentComponent,
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [],
    exports: [RouterModule],
})
export class RoutingModule {}
