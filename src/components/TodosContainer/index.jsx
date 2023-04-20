import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import { TodoItem } from "../TodoItem";

export const TodosContainer = ({
  todos,
  title,
  onDrag,
  draggedTodo,
  handleDragEnd,
  bg
}) => {
  const { updateTodoStatus, user } = useUser();
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    updateTodoStatus(draggedTodo, title, user._id);
    setIsDraggedOver(false);
  };

  const handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggedOver(false);
  };

  return (
    <div
      className={`w-9/10 h-[40vh] md:h-[75vh] md:w-full m-4 md:m-12 border-2 rounded-md ${
        !isDraggedOver
          ? "border-transparent bg-gray-200"
          : "bg-gray-200/20 border-gray-200 border-dashed"
      } overflow-auto flex flex-col items-center justify-start duration-200`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <p className="pt-6 mb-4 capitalize text-3xl text-gray-600 underline">
        {title}
      </p>
      {todos.map((todo) => {
        return (
          <TodoItem
            handleDragEnd={handleDragEnd}
            onDrag={onDrag}
            key={todo._id}
            todo={todo}
            bg={bg}
          />
        );
      })}
    </div>
  );
};
