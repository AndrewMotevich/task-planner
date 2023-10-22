import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerPageComponent } from './pages/planner-page/planner-page.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { TaskComponent } from './components/task/task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlannerPageComponent,
    TaskFormComponent,
    TaskListComponent,
    SortingPipe,
    TaskComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlannerModule { }
