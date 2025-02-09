import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'aside-group-item',
  templateUrl: './aside-group-items.component.html',
  styleUrls: ['./aside-group-items.component.css'],
  standalone: true,
  imports: [
    NgClass
  ]
})
export class AsideGroupItemsComponent {
  @Input({required: true})
  groupName!: string;
  @Input()
  separatorLine: boolean = true;
  @Input()
  isOpen: boolean = false;
}
