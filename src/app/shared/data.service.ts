// Copyright (C) IHS Markit. All Rights Reserved.

import { InjectionToken } from "@angular/core";
import { Observable } from 'rxjs';

export const DATA_SERVICE =
  new InjectionToken<AbstractDataService>('data-service');

export interface AbstractDataService {
  getData(): Observable<any>;
}
