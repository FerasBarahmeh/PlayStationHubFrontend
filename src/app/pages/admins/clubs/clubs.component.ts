import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FilterTableComponent} from "../../../components/filter-table/filter-table.component";
import {ISearchTable} from '../../../interfaces/events/ISearchTable';
import {IClub} from "../../../interfaces/clubs/IClub";
import {AdminDashboardComponent} from "../admin-dashboard/admin-dashboard.component";
import {ClubsService} from "../../../services/clubs.service";
import {BusyService} from "../../../services/busy.service";
import {IResponse} from "../../../interfaces/responses/IResponse";
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCheckCircle, faEllipsisVertical, faTrash, faInfo} from "@fortawesome/free-solid-svg-icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [
    FilterTableComponent,
    AdminDashboardComponent,
    BreadcrumbComponent,
    FaIconComponent,
    RouterLink
  ],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements OnInit, AfterViewInit {

  public clubs!:IClub[];

  public icons = {
    faEllipsisVertical,
    faCheckCircle,
    faTrash,
    faInfo
  }


  constructor(private _clubsService:ClubsService, private spinner: BusyService) {
    this.spinner.busy();
  }

  ngAfterViewInit(): void {
    this.spinner.idle();
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
