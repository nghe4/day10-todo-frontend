import { useContext } from "react";
import { useNavigate } from "react-router";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const { updateTodo, deleteTodo } = useTodoService();
  const navigate = useNavigate();

  const makeAsDone = () => {
    updateTodo(todo.id, { ...todo, done: !todo.done }).then((todo) => {
      dispatch({
        type: "TOGGLE_TODO",
        payload: todo,
      });
    });
  };

  const deleteItem = () => {
    deleteTodo(todo.id).then(() => {
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
