import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DateInputComponent } from "./date-input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: 'cv-gen-mock-parent',
  template: `
    <app-date-input
      [placeholder]="placeholder"
      [label]="label"
      [(ngModel)]="modelValue"
    ></-date-input>
  `,
})
class MockParentComponent {
  placeholder = 'Enter text';
  label = 'Text Input Label';
  modelValue = '';
}

xdescribe('DateInputComponent', () => {
  let fixture: ComponentFixture<MockParentComponent>;
  let parentComponent: MockParentComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockParentComponent],
      imports: [ReactiveFormsModule, DateInputComponent],
    });

    fixture = TestBed.createComponent(MockParentComponent);
    parentComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the parent component', () => {
    expect(parentComponent).toBeTruthy();
  });

  it('should update value on user input', () => {
    const inputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = '01/01/2023';
    inputElement.dispatchEvent(new Event('input'));
    inputElement.dispatchEvent(new KeyboardEvent('keydown', {key: '13'}))

    expect(inputElement.value).toBe('01/01/2023')
  });
});
