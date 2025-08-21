import { useTasksContext } from "../context/useTasksContext";

export function useFilteredTasks(filter: "today" | "week" | "all") {
  const { tasks, loading } = useTasksContext();

  const now = new Date();
  const weekFromNow = new Date();
  weekFromNow.setDate(now.getDate() + 7);

  const filtered = tasks.filter((t) => {
    const d = new Date(t.dueDate);

    if (filter === "today") {
      return d.toDateString() === now.toDateString();
    }
    if (filter === "week") {
      return d >= now && d <= weekFromNow;
    }
    return true; // backlog = all
  });

  return { tasks: filtered, loading };
}
