import { ITask } from '../interfaces/task.interface';

export function sortByOverdue(tasks: ITask[]): ITask[] {
  return tasks.filter((task) => {
    if(!task.date) return false;

    const currentDate = Date.now();
    if (task.date < currentDate) {
      return true;
    }

    return false;
  });
}
