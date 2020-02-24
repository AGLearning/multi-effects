import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { RouterModule } from '@angular/router';
import { SharedModule, DATA_SERVICE } from '../shared/shared.module';
import { SecondDataService } from './second-data.service';



@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SecondComponent }]),
    SharedModule
  ],
  providers: [
    { provide: DATA_SERVICE, useClass: SecondDataService },
  ]
})
export class SecondModule { }
