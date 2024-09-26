import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'ItemAside',
    templateUrl: './ItemAside.component.html',
    styleUrls: ['./ItemAside.component.css'],
    standalone: true,
    imports: [
        FaIconComponent,
        NgClass
    ]
})
export class ItemAsideComponent {
    @Input({ required: true }) itemName!: string;
    @Input() ItemIcom?: any;
    @Input() isActive: boolean = false;
}
