import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { AsideComponent } from './components/aside/aside.component';
import { NgxSpinnerModule } from 'ngx-spinner'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, AsideComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlayStationHubFrontend';
}
