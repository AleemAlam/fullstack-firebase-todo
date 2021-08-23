import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};
