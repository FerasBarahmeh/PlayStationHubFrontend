import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'aside-gruop-item',
    templateUrl: './aside-gruop-items.component.html',
    styleUrls: ['./aside-gruop-items.component.css'],
    standalone: true,
})
export class AsideGroupItemsComponent {
    @Input({ required: true }) groupName!: string;
    @Input() separetorLine: boolean = true;
}
