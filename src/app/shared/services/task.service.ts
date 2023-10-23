import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { sortByCompleted } from '../../planner/helpers/sort-by-completed.helper';
import { sortByOverdue } from '../../planner/helpers/sort-by-overdue.helper';
import { sortByUncompleted } from '../../planner/helpers/sort-by-uncompleted.helper';
import { ITask } from '../../planner/interfaces/task.interface';
import { mockTasks } from './mock/mock-tasks.mock';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = mockTasks;
  private tasksObservableSubject = new BehaviorSubject<ITask[]>(this.tasks);

  public get tasks$(): Observable<ITask[]> {
    return this.tasksObservableSubject.asObservable();
  }

  public get overdueTasks$(): Observable<ITask[]> {
    return this.tasksObservableSubject
      .asObservable()
      .pipe(map((tasks) => sortByOverdue(tasks)));
  }

  public get uncompletedTasks$(): Observable<ITask[]> {
    return this.tasksObservableSubject
      .asObservable()
      .pipe(map((tasks) => sortByUncompleted(tasks)));
  }

  public get completedTasks$(): Observable<ITask[]> {
    return this.tasksObservableSubject
      .asObservable()
      .pipe(map((tasks) => sortByCompleted(tasks)));
  }

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : this.tasks;
    this.tasksObservableSubject.next(this.tasks);
  }

  public addTask(task: ITask): void {
    this.tasks.push(task);
    this.tasksObservableSubject.next(this.tasks);
    this.saveToLocalStorage();
  }

  public deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasksObservableSubject.next(this.tasks);
    this.saveToLocalStorage();
  }

  public editTask(updatedTask: ITask): void {
    const taskIndex = this.tasks.findIndex(
      (item) => updatedTask.id === item.id
    );
    if (taskIndex === -1) return;

    this.tasks[taskIndex] = { ...updatedTask };
    this.tasksObservableSubject.next(this.tasks);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
