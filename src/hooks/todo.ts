import { useState } from "react";

import type { Todo } from "../models/todo";

export interface TodoHookReturn {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

export function useTodoHook(): TodoHookReturn {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo: TodoHookReturn["addTodo"] = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: String(Date.now()), text, completed: false },
    ]);
  };

  const toggleTodo: TodoHookReturn["toggleTodo"] = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo: TodoHookReturn["removeTodo"] = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
