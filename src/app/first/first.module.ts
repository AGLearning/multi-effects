import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { RouterModule } from '@angular/router';
import { DATA_SERVICE } from '../shared/data.service';
import { FirstDataService } from './first-data.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FirstComponent }]),
    SharedModule
  ],
  providers: [
    { provide: DATA_SERVICE, useClass: FirstDataService },
  ]
})
export class FirstModule { }
