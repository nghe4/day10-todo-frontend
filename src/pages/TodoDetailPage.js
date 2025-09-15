import { useContext } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "../components/TodoItem";

export const TodoDetailPage = () => {
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const todo = state.find((todo) => todo.id === Number(id));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <>
      {JSON.stringify(todo)}
      <TodoItem todo={todo} />
    </>
  );
};
