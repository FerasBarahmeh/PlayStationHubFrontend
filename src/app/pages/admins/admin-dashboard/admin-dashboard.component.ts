import { Component } from '@angular/core';
import { AsideComponent } from '../../../components/aside/aside.component';
import { faUsers, faWindowRestore, faGears } from "@fortawesome/free-solid-svg-icons"
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { AsideItemComponent } from '../../../components/aside-item/aside-item.component';
import { AsideGroupItemsComponent } from '../../../components/aside-gruop-item/aside-gruop-items.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
  imports: [
    FaIconComponent,
    AsideComponent,
    AsideItemComponent,
    AsideGroupItemsComponent,
    RouterModule
  ]
})
export class AdminDashboardComponent {

  public faUsers = faUsers;

  public iconDefinition: any = {
    faWindowRestore,
    faUsers,
    faGears,
  }

}
