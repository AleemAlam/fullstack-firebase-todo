import axios from "axios";

export const getTodoRequest = () => {
  return axios.get("http://localhost:3300/api/todo/");
};

export const addTodoRequest = (data) => {
  return axios.post("http://localhost:3300/api/todo/", data);
};

export const toggleTodoRequest = (id, status) => {
  return axios.patch(`http://localhost:3300/api/todo/${id}`, {
    status: !status,
  });
};

export const deleteTodoRequest = (id) => {
  return axios.delete(`http://localhost:3300/api/todo/${id}`);
};
