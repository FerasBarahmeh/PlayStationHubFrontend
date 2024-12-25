import {Component, Input} from '@angular/core';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  @Input({required:true})
  breadcrumbs: { label: string; url?: string }[] = [];

}
