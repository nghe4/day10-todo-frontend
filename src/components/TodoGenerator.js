import { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const TodoGenerator = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: { text: input, done: false } });
    setInput("");
  };

  return (
    <div className="todo-generator">
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};
