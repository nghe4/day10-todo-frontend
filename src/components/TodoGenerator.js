import { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { api } from "../api/mockApi";

export const TodoGenerator = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    api.post("/todos", { text: input.trim(), done: false }).then((response) => {
      dispatch({ type: "ADD_TODO", payload: response.data });
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
