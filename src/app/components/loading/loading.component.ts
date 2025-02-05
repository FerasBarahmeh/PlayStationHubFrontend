import {Component} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {AsyncPipe} from "@angular/common";
import {NgxSpinnerComponent} from "ngx-spinner";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    AsyncPipe,
    NgxSpinnerComponent
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {
  }
}
