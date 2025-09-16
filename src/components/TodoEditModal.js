import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";
import { Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { validateTodoText } from "../utils/validation";

export const TodoEditModal = ({ todo, isOpen, onClose }) => {
  const { dispatch } = useContext(TodoContext);
  const { updateTodo } = useTodoService();
  const [editText, setEditText] = useState(todo.text);

  const handleOk = () => {
    if (!validateTodoText(editText)) return;
    updateTodo(todo.id, { ...todo, text: editText }).then((updatedTodo) => {
      dispatch({
        type: "UPDATE_TODO",
        payload: updatedTodo,
      });
      onClose();
    });
  };

  const handleCancel = () => {
    setEditText(todo.text);
    onClose();
  };

  return (
    <Modal
      title={"Edit Todo " + todo.id}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <TextArea
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        placeholder="Edit todo text"
      />
    </Modal>
  );
};
