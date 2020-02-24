export interface SharedState {
  data: {[id: string]: any};
}

export const initialState: SharedState = {
  data: {}
};