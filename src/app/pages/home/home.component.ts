import {AfterViewInit, Component} from '@angular/core';
import {IClub} from '../../interfaces/clubs/IClub';
import {ClubsService} from "../../services/clubs.service";
import {HttpClient} from "@angular/common/http";
import {IResponse} from "../../interfaces/responses/IResponse";
import {BusyService} from "../../services/busy.service";
import {FormsModule} from "@angular/forms";
import {FeedbackClubService} from "../../services/feedback-club.service";
import {RouterLink} from "@angular/router";
import {  faX } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faFacebook, faSnapchat, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  public clubs: IClub[] = [];
  public feedback: string = '';
  public clubId: number | null = null;
  public insertMessage: string ='';
  public isAuth: string | null = localStorage.getItem('isAuth');
  public iconDefinition = {
    faXTwitter,
    faSnapchat,
    faInstagram,
    faFacebook,
    faX
  }

  constructor(private clubService: ClubsService, private feedbackClubService: FeedbackClubService, private http: HttpClient, private spinner: BusyService) {
    spinner.busy();
    this.getClubs();
  }

  ngAfterViewInit(): void {
    this.spinner.idle();
  }

  public getClubs(): void {
    this.clubService.clubs().subscribe((res: IResponse<IClub>) => {
      this.clubs = res.response;
    });
  }

  public setFeedback() {
    if (this.feedback === '' || this.clubId === null) {return;}
    this.feedbackClubService.setFeedback(this.clubId, this.feedback).subscribe((res: IResponse<any>) => {
      this.feedback = '';
      this.clubId = null;
      this.insertMessage=res.message;
    });
  }
}

