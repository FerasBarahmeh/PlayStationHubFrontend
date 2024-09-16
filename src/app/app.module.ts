import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
  ],
  exports: [
    FontAwesomeModule,
    SharedModule
  ]
})
export class AppModule { }
