import { useFilteredTasks } from "../../hooks/useFilteredTasks";

type Props = { header: string; filter: "today" | "week" | "all" };

export default function TasksPage({ header, filter }: Props) {
  const { tasks, loading } = useFilteredTasks(filter);

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}
