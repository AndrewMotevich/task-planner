import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { mockTasks } from 'src/app/shared/services/mock/mock-tasks.mock';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = mockTasks[0];
    fixture.detectChanges();
  });

  it('should create TaskComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const title = fixture.nativeElement.querySelector('label');
    expect(title.innerText).toBe('Первый таск');
  });

  it('should be unchecked in checkbox input', waitForAsync(() => {
    const checkbox = fixture.nativeElement.querySelector('input');

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(checkbox.checked).toBe(false);
    });
  }));

  it('should be checked in checkbox input', waitForAsync(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = mockTasks[0];
    component.task = { ...component.task, checked: true };

    const checkbox = fixture.nativeElement.querySelector('input');

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(checkbox.checked).toBe(true);
    });
  }));
});
