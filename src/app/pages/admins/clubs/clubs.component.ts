import {Component, OnInit} from '@angular/core';
import {FilterTableComponent} from "../../../components/filter-table/filter-table.component";
import {ISearchTable} from '../../../interfaces/events/ISearchTable';
import {IClub} from "../../../interfaces/clubs/IClub";
import {ClubsService} from "../../../services/clubs.service";
import {IResponse} from "../../../interfaces/responses/IResponse";
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";
import {AdminComponent} from "../../layouts/admin/admin.component";
import {ClubRowComponent} from "../club-row/club-row.component";
import {OwnerService} from "../../../services/owner.service";
import {InsertClubComponent} from "../insert-club/insert-club.component";
import {IOwner} from "../../../interfaces/owners/IOwner";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [
    FilterTableComponent,
    BreadcrumbComponent,
    AdminComponent,
    ClubRowComponent,
    InsertClubComponent
  ],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements OnInit {
  clubs!: IClub[];

  constructor(private _clubsService: ClubsService, private _ownerService: OwnerService) {
  }

  ngOnInit() {
    this._clubsService.clubs().subscribe((res: IResponse<IClub[]>) => {
      this.clubs = res.response;
    });
  }

  onSearchStart($event: ISearchTable) {
    console.log($event);
  }

  onClubInserted(response: IResponse<IOwner>) {
    this.clubs.push(response.response);
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: 'success',
      timerProgressBar: true,
      timer: 5000,
      title: response.message
    });
  }
}
