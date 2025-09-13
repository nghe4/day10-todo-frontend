import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const TodoItem = ({ todo }) => {
  const { state, dispatch } = useContext(TodoContext);

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

  return (
    <div className="todo-item-container">
      <div className="todo-item" onClick={makeAsDone}>
        <span className={todo.done ? "done" : ""}>{todo.text}</span>
      </div>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
