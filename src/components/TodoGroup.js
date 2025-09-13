import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoGroup = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
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
