import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppLayoutModule } from '../app-layout/app-layout.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { MainContentModule } from '../main-content/main-content.module';
import { RoutingModule } from '../routing/routing.module';
import { AppComponent } from './app.component';
import { getInitialState, metaReducers, reducers } from './reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            initialState: getInitialState,
        }),
        AppLayoutModule,
        AppMaterialModule,
        MainContentModule,
        RoutingModule,
        StoreDevtoolsModule.instrument(),
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
