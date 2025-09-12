import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoGroup = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      {state.map((item, index) => {
        return <TodoItem todo={item} key={index} />;
      })}
    </div>
  );
};
