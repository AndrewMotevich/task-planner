import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { BaseInputClass } from '../../classes/base-input.class';
import { GetErrorMessagePipe } from '../../pipes/get-error-message.pipe';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GetErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent extends BaseInputClass {
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
