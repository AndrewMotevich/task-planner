export interface ITask {
  id: number;
  title: string;
  checked: boolean;
  description?: string;
  date?: Date | string;
}
