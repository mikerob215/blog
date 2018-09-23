import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppLayoutModule } from '../app-layout/app-layout.module';

import { AppComponent } from './app.component';
import { getInitialState, metaReducers, reducers } from './reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            initialState: getInitialState,
        }),
        AppLayoutModule,
        StoreDevtoolsModule.instrument(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
