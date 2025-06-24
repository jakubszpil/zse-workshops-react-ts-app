import type { Todo } from "../models/todo";
import TodoItem from "./todo-item";

export interface TodoListProps {
  todos: Todo[];
  onTodoToggle: (id: Todo["id"]) => void;
  onTodoRemove: (id: Todo["id"]) => void;
}

export default function TodoList(props: TodoListProps) {
  return (
    <ul
      style={{
        width: "100%",
        maxWidth: 400,
        paddingLeft: 0,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {props.todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          onToggle={props.onTodoToggle}
          onRemove={props.onTodoRemove}
          todo={todo}
        />
      ))}
    </ul>
  );
}
