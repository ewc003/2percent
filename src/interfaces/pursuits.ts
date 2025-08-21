export interface ITask {
  id: string;
  description: string;
  difficulty: number;
  startDate: Date;
  endDate?: Date;
  completed: number;
  totalPoints: number;
}

export interface IPursuit {
  id: string;
  goal: string;
  tasks: ITask[];
}

export interface GetPursuitDto {
  page: number;
  limit: number;
  totalPages: number;
  totalCount: number;
  pursuits: IPursuit[];
}

export const DIFFICULTY = {
  EASY: 0,
  MEDIUM: 1,
  HARD: 2,
}