import {Component, OnInit} from '@angular/core';
import {OwnerComponent} from "../../layouts/owner/owner.component";
import {IClub} from "../../../interfaces/clubs/IClub";
import {ActivatedRoute} from "@angular/router";
import {ClubsService} from "../../../services/clubs.service";

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [
    OwnerComponent
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit {
  club!: IClub;

  id!: number;

  constructor(private _clubService: ClubsService, private _router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this._router.snapshot.paramMap.get('id'));
    this._clubService.find(this.id)
      .subscribe({
        next: data => {
          this.club = data.response;
        }
      })
  }
}
