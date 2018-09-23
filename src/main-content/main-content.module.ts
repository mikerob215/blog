import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [CommonModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
})
export class MainContentModule {}
