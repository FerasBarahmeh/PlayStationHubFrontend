import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error/error.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorComponent
  ],
  exports: [
    ErrorComponent
  ]
})
export class SharedModule { }
