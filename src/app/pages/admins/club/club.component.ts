import {Component, OnInit} from '@angular/core';
import {AdminDashboardComponent} from "../admin-dashboard/admin-dashboard.component";
import {ClubComponent as CC} from "../../../components/club/club.component";
import {ActivatedRoute} from "@angular/router";
import {ClubsService} from "../../../services/clubs.service";
import {IClub} from "../../../interfaces/clubs/IClub";
import {IResponse} from "../../../interfaces/responses/IResponse";

@Component({
  selector: 'admin-club',
  standalone: true,
  imports: [AdminDashboardComponent, CC],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit {
  club: IClub | null = null;
  id: number | null = null;

  constructor(private route: ActivatedRoute, private _clubsService: ClubsService) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._clubsService.find(this.id).subscribe((res: IResponse<IClub>) => {
      this.club = res.response ?? {};
    });
  }
}
