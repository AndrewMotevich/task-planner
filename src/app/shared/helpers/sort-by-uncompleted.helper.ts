import { ITask } from '@shared/interfaces/task.interface';

export function sortByUncompleted(tasks: ITask[]): ITask[] {
  return tasks.filter((task) => {
    if (task.checked) return false;
    if (!task.date) return true;
    if (task.date > Date.now()) return true;
    return false;
  });
}
