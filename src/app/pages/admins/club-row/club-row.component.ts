import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IClub} from "../../../interfaces/clubs/IClub";
import {RouterLink} from "@angular/router";
import {faCheckCircle, faEllipsisVertical, faInfo, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";
import Swal from "sweetalert2";
import {ClubsService} from "../../../services/clubs.service";

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

  @Output()
  clubDeleted = new EventEmitter<void>();

  icons = {
    faEllipsisVertical,
    faCheckCircle,
    faTrash,
    faInfo
  }

  constructor(private _clubService : ClubsService) {
  }

  confirmSoftDelete() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-sm btn-outline-danger',
        cancelButton: 'btn btn-sm btn-secondary',
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        showCloseButton: true,
        title: 'Are you sure?',
        text: 'when do this action the club has be deactivated, dont wary you can reactivate. the previous information for this club still you can see it',
        showCancelButton: true,
        confirmButtonText: 'delete',
        cancelButtonText: 'cancel',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.value) {
          this._clubService.softDelete(this.club.id).subscribe({
            next: (res) => {
              Swal.close();
              this.clubDeleted.emit();
              Swal.fire('Deleted!', 'The club has been deactivated.', 'success');
            },
            error: (err) => {
              Swal.fire('Error', 'An error occurred while deleting the club.', 'error');
            }
          });
          return;
        }
      });
  }
}
