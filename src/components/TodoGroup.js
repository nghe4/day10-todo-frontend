import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoGroup = () => {
  const { state } = useContext(TodoContext);

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {state.length === 0 ? (
          <p>Add the things you need to do today...</p>
        ) : (
          state.map((item, index) => {
            return <TodoItem todo={item} key={index} />;
          })
        )}
      </div>
    </div>
  );
};
