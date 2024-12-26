import {AfterViewInit, Component} from '@angular/core';
import {IClub} from '../../interfaces/clubs/IClub';
import {ClubsService} from "../../services/clubs.service";
import {HttpClient} from "@angular/common/http";
import {IResponse} from "../../interfaces/responses/IResponse";
import {BusyService} from "../../services/busy.service";
import {FormsModule} from "@angular/forms";
import {FeedbackClubService} from "../../services/feedback-club.service";
import {Router, RouterLink} from "@angular/router";
import {faX} from "@fortawesome/free-solid-svg-icons"
import {faInstagram, faFacebook, faSnapchat, faXTwitter} from "@fortawesome/free-brands-svg-icons"
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    FaIconComponent,
    JsonPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  public clubs: IClub[] = [];
  public feedback: string = '';
  public clubId: number | null = null;
  public insertMessage: string = '';
  public errorMessage:  { [key: string]: string[] } = {};
  public isAuth: string | null = localStorage.getItem('isAuth');
  public iconDefinition = {
    faXTwitter,
    faSnapchat,
    faInstagram,
    faFacebook,
    faX
  };

  constructor(private clubService: ClubsService, private feedbackClubService: FeedbackClubService, private router: Router, private spinner: BusyService) {
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
    if (this.feedback === '' || this.clubId === null) {
      return;
    }
    this.feedbackClubService.setFeedback(this.clubId, this.feedback).subscribe({
      next: (res) => {
        this.insertMessage = res.message;
        this.errorMessage = {};
      },
      error: (err) => {
        this.errorMessage = Array.isArray(err) ? err.join(', ') : err;
        console.log(this.errorMessage)
        this.insertMessage = '';
      },
    });
  }

  public toClub(club: IClub) {
    this.router.navigate(['club-details'], {state: club}).then();
  }

  protected readonly Object = Object;
}

