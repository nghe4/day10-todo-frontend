import { useContext } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "../components/TodoItem";

export const TodoDetailPage = () => {
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const todo = state.find((todo) => todo.id === id);

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h1>Todo #{todo.id}</h1>
      <p className="todo-detail">{todo.text}</p>
    </div>
  );
};
