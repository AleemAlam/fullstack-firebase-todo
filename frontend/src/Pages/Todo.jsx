import React, { useEffect, useState } from "react";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { Container } from "../Styles/styles";
import {
  addTodoRequest,
  deleteTodoRequest,
  getTodoRequest,
  toggleTodoRequest,
} from "../Network/network";
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getTodos = () => {
    setLoading(true);
    getTodoRequest()
      .then((res) => {
        setTodos(res.data.data);
        setLoading(false);
      })
      .catch(console.error);
  };

  const handleSubmit = (e, input) => {
    e.preventDefault();
    if (input === "") {
      setError(true);
      return;
    }
    setError(false);

    const payload = {
      todo: input,
      status: false,
    };
    setLoading(true);
    addTodoRequest(payload)
      .then(() => getTodos())
      .catch(console.error);
  };

  const toggleTodo = (id, status) => {
    setLoading(true);
    toggleTodoRequest(id, status)
      .then(() => getTodos())
      .catch(console.error);
  };

  const deleteTodo = (id) => {
    setLoading(true);
    deleteTodoRequest(id)
      .then(() => getTodos())
      .catch(console.error);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <h1>Todo App</h1>
      <TodoInput error={error} handleSubmit={handleSubmit} />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )}
    </Container>
  );
};
