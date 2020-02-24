// Copyright (C) IHS Markit. All Rights Reserved.

import { Injectable, forwardRef, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { DATA_SERVICE, AbstractDataService } from '../data.service';
import { getData, setData } from './shared.actions';

@Injectable()
export class SharedEffects {

    constructor(
        private actions$: Actions,
        @Inject(forwardRef(() => DATA_SERVICE))
        private readonly dataService: AbstractDataService
    ) { }

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(getData),
        mergeMap(action => this.dataService.getData()
            .pipe(
                map(data => setData({id: action.id, data: data}))
            ))
    ));

}