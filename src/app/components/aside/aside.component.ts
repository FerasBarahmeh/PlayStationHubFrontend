import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgClass } from "@angular/common";
import { faAngleDoubleRight, faSearch, faWindowRestore, faUsers, faGears, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { AsideItemComponent } from '../aside-item/aside-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './aside.component.html',
  imports: [
    FaIconComponent,
    NgClass,
    AsideItemComponent,
    RouterModule
  ],
  styleUrl: './aside.component.css'
})

export class AsideComponent {
  public iconDefinition = {
    faAngleDoubleRight,
    faSearch,
    faWindowRestore,
    faUsers,
    faGears,
    faArrowLeft
  }

  public isOpen = false;
  public isPopoverProfileOptionOpen: boolean = false;

  @ViewChild('asideSearchInput') asideSearchInput !: ElementRef;

  @HostListener('window:keydown', ['$event'])

  public handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.asideSearchInput.nativeElement.focus();
    }
  }
  public openPopover(): void {
    this.isPopoverProfileOptionOpen = !this.isPopoverProfileOptionOpen
    console.log(this.isPopoverProfileOptionOpen)
  }
}
