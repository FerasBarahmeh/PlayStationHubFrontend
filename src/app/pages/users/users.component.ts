import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent } from '../admins/admin-dashboard/admin-dashboard.component';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../interfaces/user/IUser';
import { NgClass } from '@angular/common';
import { faAngleDown, faSearch, faEllipsisVertical, faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { PaginationNavComponent } from '../../components/pagination-nav/pagination-nav.component';

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
export class UsersComponent implements OnInit {

  public icons = {
    faAngleDown,
    faEllipsisVertical,
    faSearch,
    faCheckCircle,
    faTrash,
  }

  constructor(private _userService: UserService) { }

  public users: IUser[] = [];

  public pageNumber: number = 1;

  public pageSize: number = 1;

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this._userService.users(this.pageNumber, this.pageSize).subscribe((data: IUser[]) => {
      this.users = data;
    })
  }

  onSlideChange(event: { pageNumber: number, pageSize: number }): void {

    // this.pageSize = event.pageSize;
    // this.loadUsers();
  }
}
