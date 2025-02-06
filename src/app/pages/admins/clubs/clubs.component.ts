import {Component, OnInit} from '@angular/core';
import {FilterTableComponent} from "../../../components/filter-table/filter-table.component";
import {ISearchTable} from '../../../interfaces/events/ISearchTable';
import {IClub} from "../../../interfaces/clubs/IClub";
import {ClubsService} from "../../../services/clubs.service";
import {IResponse} from "../../../interfaces/responses/IResponse";
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";
import {AdminComponent} from "../../layouts/admin/admin.component";
import {ClubRowComponent} from "../club-row/club-row.component";

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [
    FilterTableComponent,
    BreadcrumbComponent,
    AdminComponent,
    ClubRowComponent
  ],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements OnInit {

  public clubs!: IClub[];


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

  protected readonly ClubRowComponent = ClubRowComponent;
}
