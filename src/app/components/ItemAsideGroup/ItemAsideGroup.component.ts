import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ItemAsideGroup',
    templateUrl: './ItemAsideGroup.component.html',
    styleUrls: ['./ItemAsideGroup.component.css'],
    standalone: true,
})
export class ItemAsideGroupComponent {
    @Input({ required: true }) groupName!: string;
    @Input() separetorLine: boolean = true;
}
