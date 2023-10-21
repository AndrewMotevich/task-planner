import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetErrorMessagePipe } from '../../pipes/get-error-message.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GetErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaInputComponent {}
