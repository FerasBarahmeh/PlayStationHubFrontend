import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SharedModule} from "./shared/shared.module";
import {NgxSpinnerModule} from 'ngx-spinner'
import {LoadingService} from "./services/loading.service";
import {LoadingComponent} from "./components/loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, NgxSpinnerModule, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public loadingService: LoadingService) {
  }
}
