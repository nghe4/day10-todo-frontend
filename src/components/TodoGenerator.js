import { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";

export const TodoGenerator = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(TodoContext);
  const { createTodo } = useTodoService();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    createTodo(input.trim()).then((data) => {
      dispatch({ type: "ADD_TODO", payload: data });
      setInput("");
    });
  };

  return (
    <div className="todo-generator">
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};
