import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskService } from '../../../shared/services/task.service';
import { Observable, of, switchMap } from 'rxjs';
import { ITask } from '../../../shared/interfaces/task.interface';
import { FilterService } from 'src/app/shared/services/filter.service';
import { FilterOptions } from 'src/app/shared/enums/filter-options.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  public overdueTasks$: Observable<ITask[]>;
  public uncompletedTasks$: Observable<ITask[]>;
  public completedTasks$: Observable<ITask[]>;

  public filter$: Observable<FilterOptions>;

  constructor(
    private taskService: TaskService,
    private filterService: FilterService
  ) {}

  public ngOnInit(): void {
    this.filter$ = this.filterService.filter$;

    this.overdueTasks$ = this.filter$.pipe(
      switchMap((filter) => {
        if (
          filter === FilterOptions.default ||
          filter === FilterOptions.overdue ||
          filter === FilterOptions.both
        ) {
          return this.taskService.overdueTasks$;
        }
        return of([]);
      })
    );

    this.uncompletedTasks$ = this.filter$.pipe(
      switchMap((filter) => {
        if (filter === FilterOptions.default) {
          return this.taskService.uncompletedTasks$;
        }
        return of([]);
      })
    );

    this.completedTasks$ = this.filter$.pipe(
      switchMap((filter) => {
        if (
          filter === FilterOptions.default ||
          filter === FilterOptions.completed ||
          filter === FilterOptions.both
        ) {
          return this.taskService.completedTasks$;
        }
        return of([]);
      })
    );
  }
}
