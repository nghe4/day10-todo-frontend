import { useContext } from "react";
import { useNavigate } from "react-router";
import { TodoContext } from "../contexts/TodoContext";
import { api } from "../api/mockApi";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate();

  const makeAsDone = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id: todo.id },
    });
  };

  const deleteItem = () => {
    api.delete(`/todos/${todo.id}`).then(() => {
      dispatch({
        type: "DELETE_TODO",
        payload: { id: todo.id },
      });
    });
  };

  const viewDetail = () => {
    navigate(`/todo/${todo.id}`);
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item" onClick={makeAsDone}>
        <span className={todo.done ? "done" : ""}>{todo.text}</span>
      </div>
      <button onClick={viewDetail}>Detail</button>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
