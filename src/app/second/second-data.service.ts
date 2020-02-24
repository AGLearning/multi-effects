import { AbstractDataService } from '../shared/data.service';
import { of } from 'rxjs';

export class SecondDataService implements AbstractDataService{
    getData() {
        return of("data from second service");
    }
    
}