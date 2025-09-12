import { useContext } from "react";
import { TodoContext } from "../App";

export const TodoItem = ({ todo }) => {
  const { state, dispatch } = useContext(TodoContext);

  const makeAsDone = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: { id: todo.id },
    });
  };

  return (
    <div className="todo-item" onClick={makeAsDone}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
    </div>
  );
};
