import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  };

  public pageNumber: number = 1;

  public pageSize!: number;

  @Output() onSlideChangeEvent: EventEmitter<{ pageNumber: number, pageSize: number }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    let temp = localStorage.getItem('pageSize');
    this.pageSize = temp ? Number(temp) : 1;
  }

  private selectSlide(slide: number) {
    if (slide >= 1 && slide <= 100) {
      this.pageNumber = slide;
      this.onSlideChangeEvent.emit({ pageNumber: this.pageNumber, pageSize: this.pageSize });
    }
  }

  public previousSlide(): void {
    if (this.pageNumber > 1) {
      this.selectSlide(this.pageNumber - 1);
    }
  }

  public nextSlide(): void {
    if (this.pageNumber < 100) {
      this.selectSlide(this.pageNumber + 1);
    }
  }

  public onPageSizeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.pageSize = Number(selectElement.value);
    localStorage.setItem('pageSize', this.pageSize.toString());
  }
}
