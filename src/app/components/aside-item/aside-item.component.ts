import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'aside-item',
    templateUrl: './aside-item.component.html',
    styleUrls: ['./aside-item.component.css'],
    standalone: true,
    imports: [
        FaIconComponent,
        NgClass
    ]
})
export class AsideItemComponent {
    @Input({ required: true }) itemName!: string;
    @Input() ItemIcon?: any;
    @Input() isActive: boolean = false;
}
