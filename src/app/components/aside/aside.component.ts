import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgClass} from "@angular/common";
import {faBars, faBarsStaggered, faRightFromBracket, faSearch} from "@fortawesome/free-solid-svg-icons"
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {RouterModule} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../interfaces/user/IUser";

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './aside.component.html',
  imports: [
    FaIconComponent,
    NgClass,
    RouterModule
  ],
  styleUrl: './aside.component.css',
})

export class AsideComponent implements OnInit {
  public iconDefinition = {
    faRightFromBracket,
    faSearch,
    faBars,
    faBarsStaggered
  }

  public authorizedUser: IUser | null = null;

  constructor(private _authService: AuthService) {
  }

  @Input({required: false})
  public privilegeName!: string;

  @Input()
  public isOpen = false;

  @Output()
  isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('asideSearchInput')
  asideSearchInput !: ElementRef;

  @HostListener('window:keydown', ['$event'])
  public handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.isOpen = true;
      this.asideSearchInput.nativeElement.focus();
    }
  }


  ngOnInit(): void {
    if (this.authorizedUser == null) {
      this._authService.authorizedUser().subscribe(res => {
        this.authorizedUser = res.response.authenticatedUser;
        this.privilegeName = res.response.privileges.map((role: any) => role.name).at(-1);
      });
    }
  }


  toggleAside(): void {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
