import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error/error.component";
import { ErrorsComponent } from './errors/errors.component';



@NgModule({
    imports: [
        CommonModule,
        ErrorComponent,
        ErrorsComponent
    ],
    exports: [
        ErrorComponent,
        ErrorsComponent
    ]
})
export class SharedModule { }
