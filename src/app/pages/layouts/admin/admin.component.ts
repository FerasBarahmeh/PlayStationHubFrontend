import { Component } from '@angular/core';
import {AsideComponent} from "../../../components/aside/aside.component";
import {AsideGroupItemsComponent} from "../../../components/aside-gruop-item/aside-gruop-items.component";
import {AsideItemComponent} from "../../../components/aside-item/aside-item.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";
import {faEye, faGears, faLayerGroup, faShop, faUsers, faWindowRestore} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    AsideComponent,
    AsideGroupItemsComponent,
    AsideItemComponent,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  public iconDefinition: any = {
    faWindowRestore,
    faUsers,
    faGears,
    faShop,
    faLayerGroup,
    faEye,
  }

}
