import { userTypes } from "../types/userTypes";

export const userReducer = (state, action) => {
  switch (action.type) {
    case userTypes.register:
      return { ...state, user: action.payload };
    case userTypes.login:
      return { ...state, user: action.payload };
    case userTypes.addTodo:
      return { ...state, user: action.payload };
    case userTypes.updateTodo:
      return { ...state, user: action.payload };
    case userTypes.deleteTodo:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
