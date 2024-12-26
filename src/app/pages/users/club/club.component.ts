import {Component, Input, OnInit} from '@angular/core';
import {ClubComponent as CC} from "../../../components/club/club.component";
import {IClub} from "../../../interfaces/clubs/IClub";
import {BreadcrumbComponent} from "../../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'club-for-user',
  standalone: true,
  imports: [
    CC,
    BreadcrumbComponent,
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit {

  @Input({required: true})
  club!: IClub;

  ngOnInit(): void {
    const club = history.state;
    this.club = club || null;
  }
}
