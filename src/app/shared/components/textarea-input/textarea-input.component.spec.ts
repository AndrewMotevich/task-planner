import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaInputComponent } from './textarea-input.component';

@Component({
  selector: 'app-mock-parent',
  template: `
    <app-textarea-input [placeholder]="placeholder" [label]="label" [(ngModel)]="modelValue"></app-textarea-input>
  `,
})
class MockParentComponent {
  placeholder = 'Enter text';
  label = 'Text Input Label';
  modelValue = '';
}

describe('TextareaComponent', () => {
  let fixture: ComponentFixture<MockParentComponent>;
  let parentComponent: MockParentComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockParentComponent],
      imports: [FormsModule, ReactiveFormsModule, TextareaInputComponent],
    });

    fixture = TestBed.createComponent(MockParentComponent);
    parentComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the parent component', () => {
    expect(parentComponent).toBeTruthy();
  });

  it('should update value on user input', () => {
    const inputElement = fixture.nativeElement.querySelector('textarea');

    inputElement.value = 'User Typing';
    inputElement.dispatchEvent(new Event('input'));

    expect(parentComponent.modelValue).toBe('User Typing');
  });
});
