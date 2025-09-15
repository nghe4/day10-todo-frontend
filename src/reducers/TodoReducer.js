export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload.id);
    case "LOAD_TODOS":
      return action.payload;
    default:
      break;
  }
  return state;
};
