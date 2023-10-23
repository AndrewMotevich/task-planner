import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { PlannerModule } from '../../planner.module';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...new PlannerModule(),
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TaskListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should be overdue tasks', () => {
    expect(fixture.nativeElement.innerText).toContain('Просроченные:');
  });

  it('should be uncompleted tasks', () => {
    expect(fixture.nativeElement.innerText).toContain('Не выполненные:');
  });

  it('should be completed tasks', () => {
    expect(fixture.nativeElement.innerText).toContain('Выполненные:');
  });
});
