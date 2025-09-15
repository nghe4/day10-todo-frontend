import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const makeAsDone = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id: todo.id },
    });
  };

  const deleteItem = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id: todo.id },
    });
  };

  const viewDetail = () => {
    window.location.href = `/todo/${todo.id}`;
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
