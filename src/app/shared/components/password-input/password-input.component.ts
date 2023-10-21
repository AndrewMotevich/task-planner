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
import { CommonModule } from '@angular/common';
import { GetErrorMessagePipe } from '../../pipes/get-error-message.pipe';

enum TextInputType {
  password = "password",
  text = "text",
}

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GetErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent extends BaseInputClass {
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public disabled: boolean;

  public type = TextInputType.password;

  constructor(
    @Self() @Optional() ngControl: NgControl,
    cdRef: ChangeDetectorRef
  ) {
    super(ngControl, cdRef);
    this.ngControl.valueAccessor = this;
  }

  public changeVisibility(): void {
    if(this.type === TextInputType.password){
      this.type = TextInputType.text
      return;
    }
    this.type = TextInputType.password
  }
}
