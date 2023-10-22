import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ITask } from '../../interfaces/task.interface';
import { mockTasks } from '../../services/mock/mock-tasks.mock';
import { TaskService } from '../../services/task.service';
import { FormControl } from '@angular/forms';
import { Subject, of, takeUntil, tap } from 'rxjs';

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

  private unsubscribe = new Subject<boolean>();

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.taskDate = this.task.date ? new Date(this.task.date) : '';
    this.checked.setValue(this.task.checked);
    this.checked.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value) => {
        this.taskService.editTask({ ...this.task, checked: value });
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }
}
