import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { GetErrorMessagePipe } from '../../pipes/get-error-message.pipe';
import { CommonModule } from '@angular/common';
import { BaseInputClass } from '../../classes/base-input.class';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GetErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaInputComponent extends BaseInputClass {
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public disabled: boolean;
  @Input() public rows = 5;
  @Input() public cols = 5;

  constructor(
    @Self() @Optional() ngControl: NgControl,
    cdRef: ChangeDetectorRef
  ) {
    super(ngControl, cdRef);
    this.ngControl.valueAccessor = this;
  }
}
