import { mockTasks } from 'src/app/shared/services/mock/mock-tasks.mock';
import { sortByCompleted } from './sort-by-completed.helper';
import { sortByOverdue } from './sort-by-overdue.helper';
import { sortByUncompleted } from './sort-by-uncompleted.helper';

describe('SORTING by overdue', () => {
  it('should return overdue tasks', () => {
    const overdueTasks = sortByOverdue(mockTasks);
    const overdueTasksIds = overdueTasks.map((task) => task.id);
    expect(overdueTasksIds.includes(1)).toBeTruthy();
    expect(overdueTasksIds.includes(3)).toBeTruthy();
    expect(overdueTasksIds.includes(5)).toBeTruthy();
  });
});

describe('SORTING by uncompleted', () => {
  it('should return uncompleted tasks', () => {
    const uncompletedTasks = sortByUncompleted(mockTasks);
    const uncompletedTasksIds = uncompletedTasks.map((task) => task.id);
    expect(uncompletedTasksIds.includes(2)).toBeTruthy();
  });
});

describe('SORTING by completed', () => {
  it('should return completed tasks', () => {
    const completedTasks = sortByCompleted(mockTasks);
    const completedTasksIds = completedTasks.map((task) => task.id);
    expect(completedTasksIds.includes(4)).toBeTruthy();
    expect(completedTasksIds.includes(6)).toBeTruthy();
  });
});
