import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {NgClass} from "@angular/common";
import {
  faRightFromBracket,
  faAngleDoubleRight,
  faSearch,
  faWindowRestore,
  faUsers,
  faGears,
  faArrowLeft, faBurger, faMinus, faBars, faBarsStaggered
} from "@fortawesome/free-solid-svg-icons"
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {AsideItemComponent} from '../aside-item/aside-item.component';
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
    AsideItemComponent,
    RouterModule
  ],
  styleUrl: './aside.component.css'
})

export class AsideComponent implements OnInit {
  public iconDefinition = {

    faRightFromBracket,
    faAngleDoubleRight,
    faSearch,
    faWindowRestore,
    faUsers,
    faGears,
    faArrowLeft
  }
  protected readonly faBars = faBars;
  protected readonly faBarsStaggered = faBarsStaggered;

  public authorizedUser: IUser | null = null;

  constructor(private _authService: AuthService) {
  }

  @Input({required:false})
  public privilegeName!: string;

  ngOnInit(): void {
    if (this.authorizedUser == null) {
      this._authService.authorizedUser().subscribe(res => {
        this.authorizedUser = res.response.authenticatedUser;
        this.privilegeName = res.response.privileges.map((role : any)=> role.name).at(-1);
      });
    }
  }

  public isOpen = true;

  @ViewChild('asideSearchInput') asideSearchInput !: ElementRef;

  @HostListener('window:keydown', ['$event'])

  public handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.isOpen = true;
      this.asideSearchInput.nativeElement.focus();
    }
  }

}
