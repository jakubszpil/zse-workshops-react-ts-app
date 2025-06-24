import { useTodoHook } from "./hooks/todo";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoHook();

  return (
    <div
      style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      <h1>Lista zadań</h1>

      <TodoForm onSubmit={addTodo} />

      <TodoList
        todos={todos}
        onTodoRemove={removeTodo}
        onTodoToggle={toggleTodo}
      />
    </div>
  );
}

export default App;
