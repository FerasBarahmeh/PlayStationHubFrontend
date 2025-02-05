import {Component, OnInit} from '@angular/core';
import {FilterTableComponent} from "../../../components/filter-table/filter-table.component";
import {ISearchTable} from '../../../interfaces/events/ISearchTable';
import {IClub} from "../../../interfaces/clubs/IClub";
import {ClubsService} from "../../../services/clubs.service";
import {IResponse} from "../../../interfaces/responses/IResponse";
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCheckCircle, faEllipsisVertical, faInfo, faTrash} from "@fortawesome/free-solid-svg-icons";
import {RouterLink} from "@angular/router";
import {AdminComponent} from "../../layouts/admin/admin.component";

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [
    FilterTableComponent,
    BreadcrumbComponent,
    FaIconComponent,
    RouterLink,
    AdminComponent
  ],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements OnInit {

  public clubs!: IClub[];

  public icons = {
    faEllipsisVertical,
    faCheckCircle,
    faTrash,
    faInfo
  }


  constructor(private _clubsService: ClubsService) {
  }


  ngOnInit() {
    this._clubsService.clubs().subscribe((res: IResponse<IClub>) => {
      this.clubs = res.response;
    });
  }

  onSearchStart($event: ISearchTable) {
    console.log($event);
  }
}
