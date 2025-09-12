export const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
    </div>
  );
};
