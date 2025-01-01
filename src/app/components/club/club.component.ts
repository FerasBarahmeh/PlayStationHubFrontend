import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../breadcrumb/breadcrumb.component";
import {IClub} from "../../interfaces/clubs/IClub";
import {FeedbackClubService} from "../../services/feedback-club.service";
import {BusyService} from "../../services/busy.service";
import {IResponse} from "../../interfaces/responses/IResponse";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    RouterLink
  ],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit, AfterViewInit {

  @Input({required:true})
  club!: IClub;

  public feedbacks!: IResponse<any>;

  constructor(private _feedbackService: FeedbackClubService, private _spinner: BusyService) {

  }

  ngOnInit(): void {
    this._spinner.busy();
    this._setFeedbacks();
  }

  ngAfterViewInit(): void {
    this._spinner.idle()
  }

  private _setFeedbacks(): void {
    this._feedbackService.getFeedbacks(this.club?.id).subscribe((res: IResponse<any>) => {
      this.feedbacks = res;
    })
  }
}
