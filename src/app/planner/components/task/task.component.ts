import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ITask } from 'src/app/shared/interfaces/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit, OnDestroy {
  @Input() task: ITask;
  public taskDate: Date | '';
  public checked = new FormControl<boolean>(false);

  private unsubscribe$ = new Subject<boolean>();

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.taskDate = this.task.date ? new Date(this.task.date) : '';
    this.checked.setValue(this.task.checked);
    this.checked.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
      this.taskService.editTask({ ...this.task, checked: value });
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  public deleteTask(): void {
    this.taskService.deleteTask(this.task.id);
  }
}
