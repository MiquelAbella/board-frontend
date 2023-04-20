import React from "react";
import { useUser } from "../../context/userContext";
import { useState } from "react";
import { TodosContainer } from "../../components/TodosContainer";

export const MainPage = () => {
  const { user, addTodo, deleteTodo } = useUser();
  const { todos } = user;

  const [todoText, setTodoText] = useState("");
  const [draggedTodo, setDraggedTodo] = useState(null);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(todoText, user._id);
    setTodoText("");
  };

  const pendingTodos = todos.filter((todo) => {
    return todo.status === "pending";
  });
  const inProgressTodos = todos.filter((todo) => {
    return todo.status === "in-progress";
  });
  const completedTodos = todos.filter((todo) => {
    return todo.status === "done";
  });

  const handleSetDraggedTodo = (todo) => {
    setIsDeleteButtonVisible(true);
    setDraggedTodo(todo);
  };

  const handleDragEnd = () => {
    setIsDeleteButtonVisible(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteTodo(draggedTodo, user._id);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col  items-center justify-start min-h-screen bg-blue-500">
      <form onSubmit={handleAddTodo} className="mt-4 flex gap-2">
        <input
          id="addTodo"
          type="text"
          placeholder="Add"
          value={todoText}
          onChange={handleChangeTodoText}
          className="rounded-md py-2 px-4"
        />
        <button className="bg-green-500 text-white w-20 rounded-md">Add</button>
      </form>
      <div className="flex flex-col md:flex-row h-full w-full">
        <TodosContainer
          handleDragEnd={handleDragEnd}
          todos={pendingTodos}
          onDrag={handleSetDraggedTodo}
          title="pending"
          draggedTodo={draggedTodo}
          bg="bg-green-600"
        />
        <TodosContainer
          handleDragEnd={handleDragEnd}
          todos={inProgressTodos}
          onDrag={handleSetDraggedTodo}
          title="in-progress"
          draggedTodo={draggedTodo}
          bg="bg-cyan-600"
        />
        <TodosContainer
          handleDragEnd={handleDragEnd}
          todos={completedTodos}
          onDrag={handleSetDraggedTodo}
          title="done"
          draggedTodo={draggedTodo}
          bg="bg-purple-600"
        />
      </div>

      <p
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`${
          isDeleteButtonVisible
            ? "text-white border-2 border-dashed border-white bg-red-500"
            : "text-transparent bg-transparent"
        }  h-[8vh] w-full fixed bottom-2  flex items-center justify-center`}
      >
        DELETE
      </p>
    </div>
  );
};
