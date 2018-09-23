import { Action } from '@ngrx/store';

export enum AppLayoutActionTypes {
    sideNavToggled = '[SideNav] sideNavOpened',
}

export class SideNavToggled implements Action {
    readonly type = AppLayoutActionTypes.sideNavToggled;
}

export type AppLayoutActions = SideNavToggled;
