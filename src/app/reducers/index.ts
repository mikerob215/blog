import {Action, ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';


export enum SideNavActionTypes {
  sideNavToggled = '[SideNav] sideNavOpened',
}

export class SideNavToggled implements Action {
  readonly type = SideNavActionTypes.sideNavToggled;
}

export type SideNavActions = SideNavToggled;

export interface SideNavState {
  sideNavIsOpen: boolean;
}

export interface State {
  sideNavState: SideNavState;
}

export const reducers: ActionReducerMap<State> = {
  sideNavState: (state: SideNavState = {sideNavIsOpen: true}, action: SideNavActions) => {
    switch (action.type) {
      case SideNavActionTypes.sideNavToggled:
        return {
          ...state,
          sideNavIsOpen: !state.sideNavIsOpen,
        };
      default:
        return state;
    }
  },
};


const AppLogger = (reducer: ActionReducer<any>): ActionReducer<any> =>
  (state: State, action: Action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer;
  };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [
  AppLogger,
];
