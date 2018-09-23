import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromAppLayout from '../../app-layout/state/app-layout.reducer';
import { environment } from '../../environments/environment';

export interface State {
    AppLayout: fromAppLayout.AppLayoutState;
}

export function getInitialState(): State {
    return {
        AppLayout: fromAppLayout.initialState,
    };
}

export const reducers: ActionReducerMap<State> = {
    AppLayout: fromAppLayout.AppLayoutReducer,
};

export function AppLogger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state: State, action: Action) => {
        console.log('state', state);
        console.log('action', JSON.stringify(action));
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [AppLogger] : [];
