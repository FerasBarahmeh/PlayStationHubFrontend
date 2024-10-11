import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../admins/admin-dashboard/admin-dashboard.component';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../interfaces/user/IUser';
import { NgClass } from '@angular/common';
import { faAngleDown, faSearch, faEllipsisVertical, faCheckCircle, faTrash, faL } from "@fortawesome/free-solid-svg-icons"
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { PaginationNavComponent } from '../../components/pagination-nav/pagination-nav.component';
import { IPagedResponse } from '../../interfaces/responses/IPagedResponse';
import { ICountResponse } from '../../interfaces/responses/ICountResponse';
import { map } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusyService } from '../../services/busy.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [
    AdminDashboardComponent,
    FaIconComponent,
    NgClass,
    PaginationNavComponent
  ]
})
export class UsersComponent implements OnInit, AfterViewInit {

  public icons = {
    faAngleDown,
    faEllipsisVertical,
    faSearch,
    faCheckCircle,
    faTrash,
  }

  constructor(private _userService: UserService, private cdr: ChangeDetectorRef, private spinner: BusyService) { }

  public users: IUser[] = [];

  public totalCount!: number;

  ngOnInit() {
    this.spinner.busy();
    this._userService.count().subscribe((res) => { this.totalCount = res.response; this.cdr.detectChanges() });
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.spinner.idle();
  }
  private loadUsers(slideNumber: number = 1, slideSize: number = Number(localStorage.getItem('slideSize')) ?? 5) {
    this.spinner.busy();
    this._userService.users(slideNumber, slideSize).subscribe((res: IPagedResponse<IUser>) => {
      this.users = res.data;
      this.totalCount = Number(res.totalCount);
    });
    this.spinner.idle();
  }

  onSlideChange(event: any): void {
    this.loadUsers(event.slideNumber, event.slideSize);
  }
}
