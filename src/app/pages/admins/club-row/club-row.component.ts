import {Component, Input} from '@angular/core';
import {IClub} from "../../../interfaces/clubs/IClub";
import {RouterLink} from "@angular/router";
import {faCheckCircle, faEllipsisVertical, faInfo, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-club-row',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent,
    NgClass
  ],
  templateUrl: './club-row.component.html',
  styleUrl: './club-row.component.css'
})
export class ClubRowComponent {
  @Input({required: true})
  club!: IClub;

  @Input({required: false})
  isOdd = false;

  public icons = {
    faEllipsisVertical,
    faCheckCircle,
    faTrash,
    faInfo
  }

}
