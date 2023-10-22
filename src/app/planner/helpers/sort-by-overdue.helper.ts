import { ITask } from '../interfaces/task.interface';

export function sortByOverdue(tasks: ITask[]): ITask[] {
  return tasks.filter((task) => {
    if(!task.date) return false;

    const currentDateIsoString = new Date().toISOString();
    const taskDateIsoString = new Date(task.date).toISOString();

    if (taskDateIsoString < currentDateIsoString) {
      return true;
    }
    return false;
  });
}
