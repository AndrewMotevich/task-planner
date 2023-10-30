import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'getErrorMessage',
  standalone: true,
})
export class GetErrorMessagePipe implements PipeTransform {
  transform(errors: ValidationErrors, label?: string, maxlength?: number, minlength?: number): string {
    const errorMessages: { [key: string]: string } = {
      required: `Поле ${label || ''} обязательно!`,
      email: 'Не верно указана почта!',
      minlength: `Минимальная длина ${minlength}!`,
      maxlength: `Максимальная длина ${maxlength}!`,
      dateError: `Нельзя задать прошедшую дату!`,
    };

    const errorKey = Object.keys(errors)[0];
    return errorMessages[errorKey] || 'Ошибка валидации!';
  }
}
