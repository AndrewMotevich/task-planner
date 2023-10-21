import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { markAllAsDirty } from 'src/app/shared/helpers/mark-as-dirty.util';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  public submit() {
    if (this.loginForm.invalid) {
      markAllAsDirty(this.loginForm.controls);
      return;
    }
    this.authService.setIsLogin(true);
  }
}
