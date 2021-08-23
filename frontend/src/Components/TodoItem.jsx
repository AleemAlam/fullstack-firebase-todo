import React from "react";
import { TodoItemContainer } from "../Styles/styles";

export const TodoItem = ({ todo, status, id, toggleTodo, deleteTodo }) => {
  return (
    <TodoItemContainer status={status}>
      <div onClick={() => toggleTodo(id, status)}>
        <p>{todo}</p>
        <span
          style={{
            fontSize: "10px",
            margin: 0,
            color: "gray",
          }}
        >
          {status ? "Completed" : "In Progress"}
        </span>
      </div>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </TodoItemContainer>
  );
};
