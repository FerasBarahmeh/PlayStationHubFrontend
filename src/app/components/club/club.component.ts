import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../breadcrumb/breadcrumb.component";
import {IClub} from "../../interfaces/clubs/IClub";
import {FeedbackClubService} from "../../services/feedback-club.service";
import {BusyService} from "../../services/busy.service";
import {IResponse} from "../../interfaces/responses/IResponse";

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit, AfterViewInit {

  @Input({required:true})
  club!: IClub;

  public clubSummary!: IResponse<any>;

  constructor(private _feedbackService: FeedbackClubService, private _spinner: BusyService) {

  }

  ngAfterViewInit(): void {
    this._spinner.idle()
  }

  ngOnInit(): void {
    this._spinner.busy();
    this.setSummary();
  }

  private  setSummary() {
    this._feedbackService.getSummary(this.club.id).subscribe((res: IResponse<any>) => {
      this.clubSummary = res;
    });
  }
}
