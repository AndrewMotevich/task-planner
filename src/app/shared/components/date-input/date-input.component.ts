import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { GetErrorMessagePipe } from '../../pipes/get-error-message.pipe';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseInputClass } from '../../classes/base-input.class';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GetErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent extends BaseInputClass {
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public disabled: boolean;

  constructor(
    @Self() @Optional() ngControl: NgControl,
    cdRef: ChangeDetectorRef
  ) {
    super(ngControl, cdRef);
    this.ngControl.valueAccessor = this;
  }
}
