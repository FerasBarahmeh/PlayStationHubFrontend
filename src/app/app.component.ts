import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { AsideComponent } from './components/aside/aside.component';
import { NgxSpinnerModule } from 'ngx-spinner'
import { BusyService } from './services/busy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, AsideComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'PlayStationHubFrontend';

  constructor(private spinnerService: BusyService) { }
  ngOnInit(): void {
    this.spinnerService.busy();
  }
  ngAfterViewInit(): void {
    this.spinnerService.idle();
  }
}
