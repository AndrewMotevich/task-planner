import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  public tasks$: Observable<ITask[]>

  constructor(private taskService: TaskService){}

  public ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$
  }
}
