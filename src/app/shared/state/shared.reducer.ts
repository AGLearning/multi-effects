import { Action, createReducer, on,  } from '@ngrx/store';
import * as SharedActions from './shared.actions';
import { SharedState, initialState } from './shared.state';

const appReducer = createReducer(
  initialState,
  on(SharedActions.setData, (state, { id, data }) => ({...state, data: {...state.data, [id]: data} }))
);

export function reducer(state: SharedState | undefined, action: Action) {
  return appReducer(state, action);
}