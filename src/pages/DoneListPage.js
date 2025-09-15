import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "../components/TodoItem";

export const DoneListPage = () => {
  const { state } = useContext(TodoContext);
  const doneTodos = state.filter((todo) => todo.done);
  return (
    <div>
      <h1>Done List</h1>
      <ul>
        {doneTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
