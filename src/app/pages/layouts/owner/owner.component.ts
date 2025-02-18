import {Component, OnInit} from '@angular/core';
import {AsideComponent} from "../../../components/aside/aside.component";
import {AsideGroupItemsComponent} from "../../../components/aside-group-item/aside-group-items.component";
import {AsideItemComponent} from "../../../components/aside-item/aside-item.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {faEye, faGears, faLayerGroup, faShop, faUsers, faWindowRestore, faGamepad, faLinesLeaning} from "@fortawesome/free-solid-svg-icons";
import {JsonPipe, NgClass} from "@angular/common";
import {IClub} from "../../../interfaces/clubs/IClub";
import {ClubsService} from "../../../services/clubs.service";
import Swal from "sweetalert2";
import {IClubCore} from "../../../interfaces/clubs/IClubCore";

@Component({
  selector: 'app-owner-layout',
  standalone: true,
  imports: [
    AsideComponent,
    AsideGroupItemsComponent,
    AsideItemComponent,
    RouterLink,
    RouterLinkActive,
    NgClass,
    JsonPipe
  ],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit {

  isAsideOpened = false;

  iconDefinition: any = {
    faWindowRestore,
    faUsers,
    faGears,
    faShop,
    faLayerGroup,
    faEye,
    faGamepad,
    faLinesLeaning,
  }

  clubs: IClubCore[] = [];

  constructor(private _clubService: ClubsService) {

  }

  ngOnInit(): void {
    this._clubService.GetAuthenticatedUserClubsHighlights()
      .subscribe({
        next: data => {
          this.clubs = data.response;
        },
        error: err => {
          Swal.fire('Ops', 'have error accord in server; try again later pls!', 'error');
        }
      });
  }
}
