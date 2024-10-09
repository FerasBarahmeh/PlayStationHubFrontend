import { Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'pagination-nav',
  templateUrl: './pagination-nav.component.html',
  styleUrls: ['./pagination-nav.component.css'],
  standalone: true,
  imports: [
    FaIconComponent,
  ]
})

export class PaginationNavComponent implements OnInit {

  public icons = {
    faAngleLeft,
    faAngleRight,
  }

  public pageNumber: number = 1;

  public pageSize!: number;

  constructor() { }

  ngOnInit() {
    let temp = localStorage.getItem('pageSize');
    this.pageSize = temp ? Number(temp) : 1;
  }

  public onChangeSlide(newSlide: number) {
    this.pageNumber = newSlide <= 0 ? 1 : newSlide;
  }

  public onPageSizeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.pageSize = Number(selectElement.value);

    localStorage.setItem('pageSize', this.pageSize.toString());
  }
}
