import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { AppMaterialModule } from '../app-material/app-material.module';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [{ path: 'shell', component: AppShellComponent }];

@NgModule({
    imports: [AppModule, ServerModule, RouterModule.forRoot(routes), AppMaterialModule, BrowserAnimationsModule],
    bootstrap: [AppComponent],
    declarations: [AppShellComponent],
})
export class AppServerModule {}
