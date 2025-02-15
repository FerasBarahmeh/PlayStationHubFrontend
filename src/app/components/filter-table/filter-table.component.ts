import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilter, faSearch, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { ISearchTable } from '../../interfaces/events/ISearchTable';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'filter-table',
  standalone: true,
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css'],
  imports: [
    FaIconComponent,
    RouterLink,
  ]
})
export class FilterTableComponent {

  public icons = {
    faSearch,
    faFilter,
    faEllipsisVertical
  };

  @ViewChild('filterSearchInput')
  filterSearchInput !: ElementRef;

  @Output()
  searchStarted: EventEmitter<ISearchTable> = new EventEmitter<ISearchTable>();

  @Input({ required: true })
  public filterableColumns: string[] = [];

  public selectedFilters: string[] = [];

  @Input()
  public options: {name: string, url: string}[] = []

  @HostListener('window:keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === '/') {
      event.preventDefault();
      this.filterSearchInput.nativeElement.focus();
    }

    const isOnSearchInput = event.target === this.filterSearchInput.nativeElement;

    if (isOnSearchInput && event.key === 'Enter') {
      this.onSearchStart();
      this.filterSearchInput.nativeElement.value = '';
    }
  }

  private onSearchStart() {
    this.searchStarted.emit({ value: this.filterSearchInput.nativeElement.value, selectedFilters: this.selectedFilters });
  }


  public selectFilter(event: any, value: string) {
    if (event.target.checked)
      this.selectedFilters.push(value);
    else
      this.selectedFilters = this.selectedFilters.filter(v => v !== value);
  }
}
