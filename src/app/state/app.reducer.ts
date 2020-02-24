import { Action, createReducer, on,  } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState, initialState } from './index';

const appReducer = createReducer(
  initialState,
  on(AppActions.setData, (state, { data }) => ({ data: data }))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}