import { ITask } from '../../../planner/interfaces/task.interface';

export const mockTasks: ITask[] = [
  {
    id: 1,
    title: 'Первый таск',
    checked: false,
    description: 'Описание первого таска!',
    date: 1697977787683,
  },
  {
    id: 2,
    title: 'Второй таск',
    checked: false,
    description: 'Описание второго таска!',
    date: 1698070500000,
  },
  {
    id: 3,
    title: 'Третий таск',
    checked: false,
    description: 'Описание третьего таска!',
    date: 1697445930123,
  },
  {
    id: 4,
    title: 'Четвертый таск',
    checked: true,
    description: 'Описание четвертого таска!',
    date: 1697992215567,
  },
  {
    id: 5,
    title: 'Пятый таск',
    checked: false,
    description: 'Описание пятого таска!',
    date: 1697706620321,
  },
  {
    id: 6,
    title: 'Шестой таск',
    checked: true,
    description: 'Описание шестого таска!',
    date: 1698666940999,
  },
];
