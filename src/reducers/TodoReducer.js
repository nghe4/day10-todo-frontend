export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    case "ADD_TODO":
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        done: action.payload.done,
      };
      return [...state, newTodo];
    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload.id);
    case "LOAD_TODOS":
      return action.payload;
    default:
      break;
  }
  return state;
};
