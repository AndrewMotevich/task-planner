import { ITask } from 'src/app/shared/interfaces/task.interface';

export function sortByOverdue(tasks: ITask[]): ITask[] {
  return tasks.filter((task) => {
    if (!task.date) return false;

    const currentDate = Date.now();
    if (task.date < currentDate && !task.checked) {
      return true;
    }

    return false;
  });
}
