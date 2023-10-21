import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BASE } from '../shared/constants/routing-paths.consts';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: BASE.path, component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
