import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import {
  ABOUT,
  BASE,
  HOME,
  LOGIN,
} from './shared/constants/routing-paths.consts';
import { AboutComponent } from './shared/pages/about/about.component';

const routes: Routes = [
  {
    path: LOGIN.path,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: HOME.path,
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  { path: BASE.path, redirectTo: HOME.path, pathMatch: 'full' },
  { path: ABOUT.path, component: AboutComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
