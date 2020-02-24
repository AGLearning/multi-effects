// Copyright (C) IHS Markit. All Rights Reserved.

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectData } from './state';
import { getData } from './state/shared.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'data',
  template: 'data: <span>{{data}}</span>'
})
export class DataComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  @Input() id: string;
  data = 'data';


  constructor(private readonly store: Store<AppState>, ) {

  }

  ngOnInit() {
    this.store.dispatch(getData({ id: this.id }));

    this.store.pipe(
      takeUntil(this.unsubscribe$),
      select(selectData, {id: this.id})
    ).subscribe(data => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}