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

export function getInitialState(): State {
  return {
    sideNavState: {
      sideNavIsOpen: false,
    }
  };
}

export const reducers: ActionReducerMap<State> = {
  sideNavState: sideNavState,
};

export function sideNavState(state: SideNavState, action: SideNavActions) {
  switch (action.type) {
    case SideNavActionTypes.sideNavToggled:
      return {
        ...state,
        sideNavIsOpen: !state.sideNavIsOpen,
      };
    default:
      return state;
  }
}


export function AppLogger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: State, action: Action) => {
    console.log('state', state);
    console.log('action', JSON.stringify(action));
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [AppLogger] : [];
