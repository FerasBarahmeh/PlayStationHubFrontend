import {Component, Input} from '@angular/core';
import {IUser} from "../../../interfaces/user/IUser";
import {faAngleDown, faCheckCircle, faEllipsisVertical, faSearch, faTrash, faInfo, faHome, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";
import {status} from "../../../enums/Status";

@Component({
  selector: 'app-user-row',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './user-row.component.html',
  styleUrl: './user-row.component.css'
})
export class UserRowComponent {

  @Input({required: true})
  user!: IUser;

  @Input({required: true})
  isOdd: boolean = false;

  public icons = {
    faAngleDown,
    faEllipsisVertical,
    faSearch,
    faCheckCircle,
    faTrash,
    faInfo,
    faHome,
    faPlusCircle,

  }
  protected readonly status = status;
}
