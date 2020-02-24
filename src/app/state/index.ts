
import { SharedState } from 'app.state';

export interface AppState {
  shared: SharedState;
}
 
export const selectShared = (state: AppState) => state.shared;
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);