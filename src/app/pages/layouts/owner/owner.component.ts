import { Component } from '@angular/core';
import {AsideComponent} from "../../../components/aside/aside.component";
import {AsideGroupItemsComponent} from "../../../components/aside-group-item/aside-group-items.component";
import {AsideItemComponent} from "../../../components/aside-item/aside-item.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {faEye, faGears, faLayerGroup, faShop, faUsers, faWindowRestore} from "@fortawesome/free-solid-svg-icons";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-owner-layout',
  standalone: true,
  imports: [
    AsideComponent,
    AsideGroupItemsComponent,
    AsideItemComponent,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {
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
