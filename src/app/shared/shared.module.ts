import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error/error.component";
import { ErrorsComponent } from './errors/errors.component';



@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    ErrorComponent
  ],
  exports: [
    ErrorComponent,
    ErrorsComponent
  ]
})
export class SharedModule { }
