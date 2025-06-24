import type { Todo } from "../models/todo";

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li style={{ width: "100%", display: "flex", gap: 8 }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          flex: 1,
        }}
      >
        {todo.text}
      </span>

      <input
        name="completed"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <button onClick={() => onRemove(todo.id)}>x</button>
    </li>
  );
}
