import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgClass, NgOptimizedImage } from "@angular/common";
import { faAngleDoubleRight, faSearch, faWindowRestore, faUsers, faGears } from "@fortawesome/free-solid-svg-icons"
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { AsideItemComponent } from '../aside-item/aside-item.component';
@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './aside.component.html',
  imports: [
    NgOptimizedImage,
    FaIconComponent,
    NgClass,
    AsideItemComponent,
  ],
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  public iconDefinition = {
    faAngleDoubleRight,
    faSearch,
    faWindowRestore,
    faUsers,
    faGears
  }
  public isOpen = false;
  @ViewChild('asideSearchInput') asideSearchInput !: ElementRef;
  @HostListener('window:keydown', ['$event'])
  public handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.asideSearchInput.nativeElement.focus();
    }
  }
}
