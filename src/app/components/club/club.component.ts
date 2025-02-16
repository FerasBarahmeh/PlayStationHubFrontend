import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../breadcrumb/breadcrumb.component";
import {IClub} from "../../interfaces/clubs/IClub";
import {BusyService} from "../../services/busy.service";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {Status} from "../../enums/Status";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FaIconComponent,
    NgClass
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit {

  @Input({required:true})
  club!: IClub;

  constructor(private _spinner: BusyService) {
  }

  ngOnInit(): void {
    console.log(this.club);
  }

  protected readonly faFacebook = faFacebook;
  protected readonly faInstagram = faInstagram;
  protected readonly Status = Status;
}
