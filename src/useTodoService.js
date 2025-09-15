import { api } from "./api/mockApi";

export const useTodoService = () => {
  const loadTodos = () => {
    return api.get("/todos").then((response) => response.data);
  };

  const createTodo = (text) => {
    return api
      .post("/todos", { text, done: false })
      .then((response) => response.data);
  };

  const updateTodo = (id, updatedFields) => {
    return api
      .put(`/todos/${id}`, updatedFields)
      .then((response) => response.data);
  };

  const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
  };

  return { loadTodos, createTodo, updateTodo, deleteTodo };
};
