import { ITask } from '../../interfaces/task.interface';

export const mockTasks: ITask[] = [
  {
    id: 1,
    title: 'Первый таск',
    checked: false,
    description: 'Описание первого таска!',
    date: '2023-10-22T12:29:47.683Z',
  },
  {
    id: 2,
    title: 'Второй таск',
    checked: false,
    description: 'Описание второго таска!',
    date: '2023-10-23T14:15:00.000Z',
  },
  {
    id: 3,
    title: 'Третий таск',
    checked: false,
    description: 'Описание третьего таска!',
    date: '2023-10-16T08:45:30.123Z',
  },
  {
    id: 4,
    title: 'Четвертый таск',
    checked: true,
    description: 'Описание четвертого таска!',
    date: '2023-10-22T16:30:15.567Z',
  },
  {
    id: 5,
    title: 'Пятый таск',
    checked: false,
    description: 'Описание пятого таска!',
    date: '2023-10-19T09:10:20.321Z',
  },
  {
    id: 6,
    title: 'Шестой таск',
    checked: true,
    description: 'Описание шестого таска!',
    date: '2023-10-30T11:55:40.999Z',
  },
];
