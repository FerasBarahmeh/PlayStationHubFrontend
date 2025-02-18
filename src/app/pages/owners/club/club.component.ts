import {Component, OnInit} from '@angular/core';
import {OwnerComponent} from "../../layouts/owner/owner.component";
import {IClub} from "../../../interfaces/clubs/IClub";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ClubsService} from "../../../services/clubs.service";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import {DashboardCardComponent} from "../../../components/dashboard-card/dashboard-card.component";
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [
    OwnerComponent,
    DashboardCardComponent,
    RouterLink,
    BreadcrumbComponent
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit {
  club!: IClub;

  id!: number;

  constructor(private _clubService: ClubsService, private _router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this._router.snapshot.paramMap.get('id'));
    this._clubService.find(this.id)
      .subscribe({
        next: data => {
          this.club = data.response;
        }
      })
  }

  protected readonly faGamepad = faGamepad;
}
