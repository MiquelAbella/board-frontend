import React, { createContext, useReducer, useContext } from "react";
import { userReducer } from "../reducers/userReducer";
import { create, login, createGoogle, googleLogin } from "../../api/userApi";
import { userTypes } from "../types/userTypes";
import { add, remove, updateStatus, updateTodo } from "../../api/todosApi";

const initialState = {
  user: null,
};

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const createUser = async (user) => {
    const response = await create(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: userTypes.register, payload: response.user });
    }
  };

  const createGoogleUser = async (user) => {
    const response = await createGoogle(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: userTypes.register, payload: response.user });
    }
  };

  const loginUser = async (user) => {
    const response = await login(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: userTypes.login, payload: response.user });
    }
  };
  const loginGoogleUser = async (user) => {
    const response = await googleLogin(user);
    if (response.ok) {
      localStorage.setItem("token", response.user.token);
      dispatch({ type: userTypes.login, payload: response.user });
    }
  };

  const addTodo = async (todo, userId) => {
    const response = await add(todo, userId);
    if (response.ok) {
      dispatch({ type: userTypes.addTodo, payload: response.user });
    }
  };

  const updateTodoStatus = async (todo, status, userId) => {
    const response = await updateStatus(todo, status, userId);
    if (response.ok) {
      dispatch({ type: userTypes.updateTodo, payload: response.user });
    }
  };

  const deleteTodo = async (todo, userId) => {
    const response = await remove(todo, userId);
    if (response.ok) {
      dispatch({ type: userTypes.deleteTodo, payload: response.user });
    }
  };

  const editTodo = async (todo, todoId, userId) => {
    const response = await updateTodo(todo, todoId, userId);
    if (response.ok) {
      dispatch({ type: userTypes.updateTodo, payload: response.user });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        createUser,
        createGoogleUser,
        loginUser,
        loginGoogleUser,
        addTodo,
        updateTodoStatus,
        deleteTodo,
        editTodo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
