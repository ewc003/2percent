import { createContext, useContext } from "react";

export type Task = { id: string; title: string; dueDate: string };

type TasksContextValue = { tasks: Task[]; loading: boolean };

export const TasksContext = createContext<TasksContextValue>({ tasks: [], loading: true });

export function useTasksContext() {
  return useContext(TasksContext);
}