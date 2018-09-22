import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  somethingReducer: (state, action) => state,
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
