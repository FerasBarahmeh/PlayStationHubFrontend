import { NgClass } from '@angular/common';
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
    NgClass
  ],
})

export class PaginationNavComponent implements OnInit {

  public icons = {
    faAngleLeft,
    faAngleRight,
  };

  @Input()
  public slideNumber: number = 1;

  public slideSize!: number;

  @Input({ required: true })
  public totalCount!: number;

  @Output()
  slideChange: EventEmitter<{ slideNumber: number, slideSize: number }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.slideSize = Number(localStorage.getItem('slideSize')) ?? 5;
  }

  private onSelectSlide(slide: number) {
    if (slide >= 1 && slide <= this.totalCount) {
      this.slideNumber = slide;
      this.slideChange.emit({ slideNumber: this.slideNumber, slideSize: this.slideSize });
    }
  }

  public previousSlide(): void {
    if (this.slideNumber > 1) {
      this.onSelectSlide(this.slideNumber - 1);
    }
  }

  public nextSlide(): void {
    console.log(this.slideNumber * this.slideSize);

    if (this.slideNumber * this.slideSize < this.totalCount) {
      this.onSelectSlide(this.slideNumber + 1);
    }
  }

  public onSlideSizeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.slideSize = Number(selectElement.value);
    localStorage.setItem('slideSize', this.slideSize.toString());
    this.onSelectSlide(this.slideNumber);
  }
}
