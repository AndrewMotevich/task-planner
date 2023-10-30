import { ITask } from '@shared/interfaces/task.interface';

export function sortByCompleted(tasks: ITask[]): ITask[] {
  return tasks.filter((task) => task.checked);
}
