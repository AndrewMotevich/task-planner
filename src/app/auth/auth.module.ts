import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TextInputComponent } from 'src/app/shared/components/text-input/text-input.component';
import { PasswordInputComponent } from 'src/app/shared/components/password-input/password-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, TextInputComponent, PasswordInputComponent],
})
export class AuthModule {}
