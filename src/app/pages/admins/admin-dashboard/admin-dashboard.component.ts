import {Component} from '@angular/core';
import {AsideComponent} from '../../../components/aside/aside.component';
import {faGears, faUsers, faWindowRestore, faShop} from "@fortawesome/free-solid-svg-icons"
import {AsideItemComponent} from '../../../components/aside-item/aside-item.component';
import {AsideGroupItemsComponent} from '../../../components/aside-gruop-item/aside-gruop-items.component';
import {RouterModule} from '@angular/router';
import {NgClass} from "@angular/common";

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
  imports: [
    AsideComponent,
    AsideItemComponent,
    AsideGroupItemsComponent,
    RouterModule,
    NgClass
  ]
})
export class AdminDashboardComponent {

  public iconDefinition: any = {
    faWindowRestore,
    faUsers,
    faGears,
    faShop,
  }

}
