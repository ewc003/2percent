// context/TasksContext.tsx
import { useEffect, useState } from "react";
import { TasksContext, type Task } from "./useTasksContext";
// import { fetchAllTasks } from "../api/tasks";


export default function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    // TODO: LINK TO DATABASE
    async function load() {
      setLoading(true);
      const all = [
        {
          id: "123",
          title: "task 1",
          dueDate: Date.now().toLocaleString(),
        }
      ];
      if (active) {
        setTasks(all);
        setLoading(false);
      }
    }

    load();
    return () => { active = false; };
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, loading }}>
      {children}
    </TasksContext.Provider>
  );
}
