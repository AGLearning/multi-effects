import { createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';


export interface AppState {
  shared: SharedState;
}
 
export const selectShared = (state: AppState) => state.shared;
 
export const selectData = createSelector(
  selectShared,
  (state: SharedState, props: {id: string}) => state && state.data ? state.data[props.id] : undefined
);