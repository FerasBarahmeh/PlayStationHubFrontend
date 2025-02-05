import {Component, OnInit} from '@angular/core';
import {BreadcrumbComponent} from "../../components/breadcrumb/breadcrumb.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faLightbulb as faLed, faScroll} from "@fortawesome/free-solid-svg-icons";
import {IClub} from "../../interfaces/clubs/IClub";
import {ClubsService} from "../../services/clubs.service";
import {IResponse} from "../../interfaces/responses/IResponse";
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FeedbackClubService} from "../../services/feedback-club.service";
import {ActivatedRoute} from "@angular/router";
import {AdminComponent} from "../layouts/admin/admin.component";

@Component({
  selector: 'app-overviews',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FaIconComponent,
    ReactiveFormsModule,
    AdminComponent
  ],
  templateUrl: './overviews.component.html',
  styleUrl: './overviews.component.css'
})
export class OverviewsComponent implements OnInit {

  public icons = {
    faLed,
    faScroll
  };

  public clubs!: IClub[];

  public overviewForm!: FormGroup;

  public submitted: boolean = false;

  public overview: string = 'Pick a club to discover its highlights! 😊';

  public id: number | null = null;

  constructor(public clubsService: ClubsService, private fb: FormBuilder, private _feedbackClubService: FeedbackClubService, private _route: ActivatedRoute) {
    clubsService.clubs().subscribe((res: IResponse<IClub>) => {
      this.clubs = res.response;
    });

    const today = new Date();
    const oneWeekAgo = new Date(new Date().setDate(new Date().getDate() - 7));

    this.overviewForm = this.fb.group({
      id: [this.id || null, Validators.required],
      prompt: [localStorage.getItem('prompt') ?? '', [Validators.maxLength(400)]],
      from: [oneWeekAgo.toISOString().split('T')[0], this.sqlDateValidator],
      to: [today.toISOString().split('T')[0], this.sqlDateValidator]
    });
  }

  ngOnInit(): void {
    this.id = null;
    this._route.paramMap.subscribe(params => {
      if (params.has('id')) {
        const idParam = params.get('id');
        this.id = idParam ? Number(idParam) : null;
        this.overviewForm.patchValue({id: this.id})
        this.generateOverview();
      }
    });
  }

  public generateOverview() {
    this.submitted = true;
    if (this.overviewForm.invalid) return;
    localStorage.setItem('prompt', this.overviewForm.value.prompt);
    this._feedbackClubService.getOverview(this.overviewForm.value).subscribe({
      next: (result) => {
        this.overview = result.response;
      }
    });

  }

  private sqlDateValidator(control: AbstractControl) {
    const value = control.value;
    if (!value) return null;

    const date = new Date(value);
    const minDate = new Date('1753-01-01');
    const maxDate = new Date('9999-12-31');

    if (date < minDate || date > maxDate) {
      return {invalidSqlDate: true};
    }

    return null;
  }
}
