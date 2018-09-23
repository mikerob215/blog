import { AppLayoutActions, AppLayoutActionTypes } from './app-layout.actions';

export interface AppLayoutState {
    sideNavIsOpen: boolean;
}

export const initialState: AppLayoutState = {
    sideNavIsOpen: false,
};

export function AppLayoutReducer(state: AppLayoutState, action: AppLayoutActions) {
    switch (action.type) {
        case AppLayoutActionTypes.sideNavToggled:
            return {
                ...state,
                sideNavIsOpen: !state.sideNavIsOpen,
            };
        default:
            return state;
    }
}
