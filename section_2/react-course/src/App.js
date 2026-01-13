import Todo from "./components/Todo";
import { tasks } from "./data/data";

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      {tasks.map((t) => (
        <Todo
          key={t.id}
          title={t.title}
          startDate={t.startDate}
          endDate={t.endDate}
          progress={t.progress}
          assignedTo={t.assignee}
        />
      ))}
    </div>
  );
}

export default App;
