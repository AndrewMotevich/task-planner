import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerPageComponent } from './pages/planner-page/planner-page.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';


@NgModule({
  declarations: [
    PlannerPageComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule
  ]
})
export class PlannerModule { }
