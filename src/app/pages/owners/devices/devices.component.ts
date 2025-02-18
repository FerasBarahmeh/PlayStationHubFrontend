import {Component, OnInit} from '@angular/core';
import {OwnerComponent} from "../../layouts/owner/owner.component";
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";
import {FilterTableComponent} from "../../../components/filter-table/filter-table.component";
import {ISearchTable} from "../../../interfaces/events/ISearchTable";
import {DeviceRowComponent} from "../device-row/device-row.component";
import {InsertReservationComponent} from "../insert-reservation/insert-reservation.component";
import {IClub} from "../../../interfaces/clubs/IClub";
import {ClubsService} from "../../../services/clubs.service";
import {ActivatedRoute} from "@angular/router";
import {IDevice} from "../../../interfaces/devices/IDevice";

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [
    OwnerComponent,
    BreadcrumbComponent,
    FilterTableComponent,
    DeviceRowComponent,
    InsertReservationComponent
  ],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent implements OnInit {
  club!: IClub;

  devices: IDevice[] = [];

  constructor(private _clubsServices: ClubsService, private _router: ActivatedRoute) {
  }

  ngOnInit(): void {
    let clubId = this._router.snapshot.params['clubId'];
    this._clubsServices.find(clubId).subscribe({
      next: data => {
        this.club = data.response;
      }
    })

    this.devices = [
      {
        id: 1,
        name: "Playstation 5 device 1",
        description: "Playstation 5 device description",
        hourPrice: 1.5,
        clubID: 8,
      }
    ];
  }

  onSearchStart($event: ISearchTable) {
    console.log($event);
  }
}
