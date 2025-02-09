import {Component} from '@angular/core';
import {AsideComponent} from "../../../components/aside/aside.component";
import {AsideItemComponent} from "../../../components/aside-item/aside-item.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";
import {faEye, faGears, faLayerGroup, faShop, faUsers, faWindowRestore} from "@fortawesome/free-solid-svg-icons";
import {AsideGroupItemsComponent} from "../../../components/aside-group-item/aside-group-items.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    AsideComponent,
    AsideItemComponent,
    RouterLink,
    RouterLinkActive,
    NgClass,
    AsideGroupItemsComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {

  isAsideOpened = false;

  public iconDefinition: any = {
    faWindowRestore,
    faUsers,
    faGears,
    faShop,
    faLayerGroup,
    faEye,
  }

}
