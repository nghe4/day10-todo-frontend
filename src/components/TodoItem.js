import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";
import { TodoEditModal } from "./TodoEditModal";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const { updateTodo, deleteTodo } = useTodoService();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const makeAsDone = () => {
    updateTodo(todo.id, { ...todo, done: !todo.done }).then((todo) => {
      dispatch({
        type: "UPDATE_TODO",
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
      <button onClick={showModal}>Edit</button>
      <button onClick={deleteItem}>X</button>
      <TodoEditModal todo={todo} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
