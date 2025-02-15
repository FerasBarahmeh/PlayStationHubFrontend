import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Status} from "../../../enums/Status";
import {IOwnersCoreDetails} from "../../../interfaces/owners/IOwnersCoreDetails";
import {OwnerService} from "../../../services/owner.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";
import {getValidationClasses} from '../../../Utilities/validation.utils';
import {ValidationMessageComponent} from "../../../components/validation-message/validation-message.component";
import {numericValidator} from "../../../Utilities/numeric-validator.utils";
import {HttpClient} from "@angular/common/http";
import {ClubsService} from "../../../services/clubs.service";
import {IResponse} from "../../../interfaces/responses/IResponse";
import {IOwner} from "../../../interfaces/owners/IOwner";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-insert-club',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ValidationMessageComponent, FaIconComponent],
  templateUrl: './insert-club.component.html',
  styleUrl: './insert-club.component.css'
})
export class InsertClubComponent implements OnInit {
  readonly status: any = Status;

  protected readonly faCircleExclamation = faCircleExclamation;

  owners: IOwnersCoreDetails[] | null = null;

  insertableClubForm!: FormGroup;

  @Output()
  clubInserted = new EventEmitter<IResponse<IOwner>>();

  @ViewChild('closeButton')
  closeButton!: ElementRef;

  errorMessage: string = "";

  constructor(private _ownerService: OwnerService, private fb: FormBuilder, private _http: HttpClient, private _clubServices: ClubsService) {
    this.insertableClubForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      ownerId: [null, [Validators.required, numericValidator]],
      deviceCount: [0, [Validators.required, Validators.min(0)]],
      status: [Status.active.value, [Validators.required, numericValidator, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    if (this.owners == null) {
      this._ownerService.getOwnersCoreDetails()
        .subscribe(res => {
          this.owners = res.response;
        });
    }
  }

  onInsertClub(): void {
    this.insertableClubForm.markAllAsTouched();
    if (this.insertableClubForm.valid) {
      this._clubServices.insert(this.insertableClubForm.value)
        .subscribe({
          next: (res) => {
            this.clubInserted.emit(res);
            this.closeButton.nativeElement.click();
          },
          error: (error) => {
            this.errorMessage = "fail insert club, try again later";
          },
        });
    }
  }

  onCancelledInsertClub(): void {
    this.insertableClubForm.reset({
      deviceCount: 0,
      status: Status.active.value,
    });
  }

  getValidationClasses(controlName: string) {
    return getValidationClasses(this.insertableClubForm.get(controlName));
  }

}
