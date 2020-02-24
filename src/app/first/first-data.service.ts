// Copyright (C) IHS Markit. All Rights Reserved.

import { AbstractDataService } from '../shared/data.service';
import { of } from 'rxjs';

export class FirstDataService implements AbstractDataService{
    getData() {
        return of("data from first service");
    }
    
}