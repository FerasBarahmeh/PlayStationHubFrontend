import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {Router} from '@angular/router';
import {AppModule} from '../../../app.module';
import {ILoginResponse} from '../../../interfaces/auth/ILoginResponce';
import {
  ILoginAbstractControl
} from '../../../interfaces/dataTransfareObjects/abstract-controler/users/ILoginAbstractControl';
import {ILogin} from '../../../interfaces/dataTransfareObjects/users/ILogin';
import {AuthService} from '../../../services/auth.service';
import {SharedService} from '../../../services/shared.service';
import {hasSpace} from '../../../validators/HasSpaceValidator';
import {map, take} from "rxjs/operators";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AppModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  public rememberMe: boolean = false;

  public loginForm!: FormGroup<ILoginAbstractControl>;

  public backendErrors?: { [key: string]: string[] };

  public errorMessage?: string = '';

  public successMessage?: string = '';

  private _userInfo?: ILogin | null;

  public apparentPassword: boolean = false;

  constructor(
    private _authService: AuthService,
    private _sharedService: SharedService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.rememberMe = !!localStorage.getItem('rememberMe');
      this._userInfo = this.rememberMe
        ? JSON.parse(localStorage.getItem('rememberMe') ?? '{}')
        : null;
    }

    this.loginForm = new FormGroup<ILoginAbstractControl>(
      {
        username: new FormControl(this._userInfo?.username, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(17),
        ]),
        password: new FormControl(this._userInfo?.password, [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      {validators: hasSpace('username')}
    );
  }

  public toggleRememberMe(): void {
    this.rememberMe = !this.rememberMe;
  }

  public resetBackendErrors() {
    this.backendErrors = {};
    this.errorMessage = '';
  }

  private _setRememberMe() {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    localStorage.setItem('rememberMe', JSON.stringify({username, password}));
  }

  private _unsetRememberMe() {
    localStorage.removeItem('rememberMe');
  }

  private _determinedStation() {
    let isAdmin: boolean;
    let isOwner: boolean;

    combineLatest([
      this._authService.isAdmin(),
      this._authService.isOwner()
    ]).pipe(take(1)).subscribe(([isAdminResponse, isOwnerResponse]) => {
      isAdmin = isAdminResponse.response;
      isOwner = isOwnerResponse.response;

      if (isAdmin) {
        this._router.navigateByUrl('admin/dashboard')
          .then(r => console.log("To Admin Dashboard! ", r));
      } else if (isOwner) {
        this._router.navigateByUrl('owner/dashboard')
          .then(r => console.log("To Owner Dashboard! ", r));
      } else {
        this._router.navigateByUrl('/home')
          .then(r => console.log("To default route! ", r));
      }
    });
  }

  public login() {
    const data: ILogin = <ILogin>this.loginForm.value;
    this.rememberMe ? this._setRememberMe() : this._unsetRememberMe();

    return this._authService.login(data).subscribe({
      next: (res: ILoginResponse) => {
        this.resetBackendErrors();
        if (res.statusCode == 200) {
          this._sharedService.changeMessage(res.message);
          this._determinedStation();
        }
      },
      error: (err) => {
        this.backendErrors = err.status == 400 ? err.error.errors : {};
        this.errorMessage = err.status == 401 ? err.error.message : '';
      },
    });
  }
}
