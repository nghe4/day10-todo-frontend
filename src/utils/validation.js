import { message } from "antd";

export const validateTodoText = (text) => {
  if (text.trim() === "") {
    message.error("Todo text cannot be empty");
    return false;
  }
  return true;
};
