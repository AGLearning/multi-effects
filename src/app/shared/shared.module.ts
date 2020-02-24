// Copyright (C) IHS Markit. All Rights Reserved.

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DataComponent } from './data.component';
import { SharedEffects } from './state/shared.effects';
import { reducer as SharedReducer } from './state/shared.reducer';
export { AbstractDataService, DATA_SERVICE } from './data.service';

@NgModule({
  imports:      [ 
    CommonModule,
    StoreModule.forFeature('shared', SharedReducer),
    EffectsModule.forFeature([SharedEffects]), 
  ],
  declarations: [ DataComponent ],
  exports: [DataComponent]
})
export class SharedModule { }
