import {Component, Input} from '@angular/core';
import {AdminDashboardComponent} from "../admin-dashboard/admin-dashboard.component";
import {ClubComponent as CC} from "../../../components/club/club.component";
import { IClub } from '../../../interfaces/clubs/IClub';
import {Router} from "@angular/router";

@Component({
  selector: 'admin-club',
  standalone: true,
  imports: [
    AdminDashboardComponent,
    CC,
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {
  @Input({required:true})
  club!: IClub;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state)
      this.club = navigation.extras.state['club'] as IClub;

  }
}
