import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'filter-table',
  standalone: true,
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css'],
  imports: [
    FaIconComponent,
  ]
})
export class FilterTableComponent {

  public icons = {
    faSearch,
    faFilter
  };

  @ViewChild('filterSearchInput') filterSearchInput !: ElementRef;

  @HostListener('window:keydown', ['$event'])

  public handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === '/') {
      event.preventDefault();
      this.filterSearchInput.nativeElement.focus();
    }

    let inputValue = this.filterSearchInput.nativeElement.value;
    if (inputValue != '' && event.key === 'Enter') {
      this.filterSearchInput.nativeElement.value = '';
    }
  }

  public sendRequest() {

  }
}
