import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { markAllAsDirty } from 'src/app/shared/helpers/mark-as-dirty.util';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent {
  public taskForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dateParser: NgbDateParserFormatter,
    private taskService: TaskService
  ) {}

  public ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: new FormControl<Date>(null, { validators: this.validateDate() }),
      description: ['', Validators.maxLength(255)],
    });
  }

  public addTask() {
    if (this.taskForm.invalid) {
      markAllAsDirty(this.taskForm.controls);
      return;
    }
    const parsedDate = new Date(
      this.dateParser.format(this.taskForm.controls['date'].getRawValue())
    );

    this.taskService.addTask({
      ...this.taskForm.getRawValue(),
      id: Date.now(),
      date: Number(parsedDate),
      checked: false,
    });
    this.activeModal.close();
  }

  private validateDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = this.dateParser.format(control.getRawValue());
      if (!date) {
        return null;
      }
      return Number(new Date(date)) < Date.now() ? { dateError: true } : null;
    };
  }
}
