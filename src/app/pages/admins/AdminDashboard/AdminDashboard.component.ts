import { Component, OnInit } from '@angular/core';
import { AsideComponent } from '../../../components/aside/aside.component';

@Component({
  selector: 'app-AdminDashboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.css'],
  standalone: true,
  imports: [
    AsideComponent
  ]
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
