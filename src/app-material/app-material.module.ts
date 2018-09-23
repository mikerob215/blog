import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

/**
 * Module containing all the parts of material used in application
 */
@NgModule({
    imports: [CommonModule],
    exports: [MatButtonModule, MatIconModule, MatListModule, MatListModule, MatSidenavModule, MatToolbarModule],
    declarations: [],
})
export class AppMaterialModule {}
