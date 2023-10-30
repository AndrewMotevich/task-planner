import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BASE } from '@shared/constants/routing-paths.consts';
import { PlannerPageComponent } from './pages/planner-page/planner-page.component';

const routes: Routes = [
  {
    path: BASE.path,
    component: PlannerPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannerRoutingModule {}
