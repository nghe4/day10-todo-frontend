import { TodoGenerator } from "./TodoGenerator";
import { TodoGroup } from "./TodoGroup";

export const TodoList = () => {
  return (
    <>
      <TodoGroup />
      <TodoGenerator />
    </>
  );
};
