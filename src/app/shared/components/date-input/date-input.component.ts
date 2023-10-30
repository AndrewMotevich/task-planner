import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, Self } from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseInputClass } from 'src/app/shared/classes/base-input.class';
import { GetErrorMessagePipe } from 'src/app/shared/pipes/get-error-message.pipe';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GetErrorMessagePipe, NgbDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent extends BaseInputClass {
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public disabled: boolean;

  constructor(@Self() @Optional() ngControl: NgControl, cdRef: ChangeDetectorRef) {
    super(ngControl, cdRef);
    this.ngControl.valueAccessor = this;
  }
}
