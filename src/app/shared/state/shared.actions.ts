// Copyright (C) IHS Markit. All Rights Reserved.

import { createAction, props } from '@ngrx/store';

export const getData = createAction(
  '[App] Get Data',
  props<{ id: string; }>()
);

export const setData = createAction(
  '[App] Set Data',
  props<{ id: string; data: any }>()
);