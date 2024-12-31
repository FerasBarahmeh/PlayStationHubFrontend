import {Component} from '@angular/core';
import {AdminDashboardComponent} from "../admins/admin-dashboard/admin-dashboard.component";
import {BreadcrumbComponent} from "../../components/breadcrumb/breadcrumb.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faLightbulb as faLed, faScroll} from "@fortawesome/free-solid-svg-icons";
import {IClub} from "../../interfaces/clubs/IClub";
import {ClubsService} from "../../services/clubs.service";
import {IResponse} from "../../interfaces/responses/IResponse";
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-overviews',
  standalone: true,
  imports: [
    AdminDashboardComponent,
    BreadcrumbComponent,
    FaIconComponent,
    ReactiveFormsModule
  ],
  templateUrl: './overviews.component.html',
  styleUrl: './overviews.component.css'
})
export class OverviewsComponent {

  public icons = {
    faLed,
    faScroll
  };

  public clubs!: IClub[];

  public overviewForm!: FormGroup;

  public submitted: boolean = false;

  constructor(public clubsService: ClubsService, private fb: FormBuilder) {
    clubsService.clubs().subscribe((res: IResponse<IClub>) => {
      this.clubs = res.response;
    });

    const today = new Date();
    const oneWeekAgo = new Date(new Date().setDate(new Date().getDate() - 7));

    this.overviewForm = this.fb.group({
      clubId: ['', Validators.required],
      prompt: ['', [Validators.maxLength(2)]],
      from: [oneWeekAgo.toISOString().split('T')[0], this.sqlDateValidator],
      to: [today.toISOString().split('T')[0], this.sqlDateValidator]
    });
  }

  public generateOverview() {
    this.submitted = true;
    if (this.overviewForm.invalid) return;
    console.log(this.overviewForm.value);
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
