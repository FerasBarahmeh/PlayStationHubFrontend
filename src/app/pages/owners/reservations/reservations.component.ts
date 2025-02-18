import {Component, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";
import {OwnerComponent} from "../../layouts/owner/owner.component";
import {ISearchTable} from "../../../interfaces/events/ISearchTable";
import {IClub} from "../../../interfaces/clubs/IClub";
import {ClubsService} from "../../../services/clubs.service";
import {IDevice} from "../../../interfaces/devices/IDevice";
import {ClubRowComponent} from "../../admins/club-row/club-row.component";
import {FilterTableComponent} from "../../../components/filter-table/filter-table.component";
import {InsertClubComponent} from "../../admins/insert-club/insert-club.component";

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    OwnerComponent,
    ClubRowComponent,
    FilterTableComponent,
    InsertClubComponent
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {

  reservations!: any;
  device!: IDevice;

  constructor(private _clubService: ClubsService) {

  }

  ngOnInit(): void {
    this.device = {
      name: 'PlayStation 5',
      description: 'description for playstation 5',
      hourPrice: 1.5,
      clubID: 8,
    } as IDevice;
  }

  onSearchStart(event: ISearchTable) {

  }
}
