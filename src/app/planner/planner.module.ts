import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from '@shared/components/date-input/date-input.component';
import { TextInputComponent } from '@shared/components/text-input/text-input.component';
import { TextareaInputComponent } from '@shared/components/textarea-input/textarea-input.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { PlannerPageComponent } from './pages/planner-page/planner-page.component';
import { PlannerRoutingModule } from './planner-routing.module';

@NgModule({
  declarations: [PlannerPageComponent, TaskFormComponent, TaskListComponent, TaskComponent],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    ReactiveFormsModule,
    TextInputComponent,
    TextareaInputComponent,
    DateInputComponent,
  ],
})
export class PlannerModule {}
