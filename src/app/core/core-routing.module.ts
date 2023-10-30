import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BASE, HOME } from '@shared/constants/routing-paths.consts';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { authGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: BASE.path,
    component: CorePageComponent,
    children: [
      {
        path: HOME.path,
        loadChildren: () => import('../planner/planner.module').then((m) => m.PlannerModule),
        canMatch: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
