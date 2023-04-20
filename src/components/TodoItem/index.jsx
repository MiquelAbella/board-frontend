import React, { useRef } from "react";
import { useState } from "react";
import { useUser } from "../../context/userContext";

export const TodoItem = ({ todo, onDrag, handleDragEnd, bg }) => {
  const { user, editTodo } = useUser();
  const [isHovered, setisHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
  const ref = useRef();

  const handleDrag = () => {
    onDrag(todo);
    setisHovered(false);
  };

  const handleStartEditing = async () => {
    await setIsEditing(true);
    ref.current.focus();
  };

  const onInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleEditTodo = () => {
    setIsEditing(false);
    editTodo(todoText, todo._id, user._id);
  };

  return (
    <>
      <div
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        className={`p-4 m-2 border text-gray-700 ${bg} text-white shadow-md  rounded-md w-5/6 cursor-grab flex items-center justify-between`}
        draggable="true"
        onDragStart={handleDrag}
        onDragEnd={handleDragEnd}
        onDoubleClick={handleStartEditing}
      >
        {isEditing ? (
          <input
            className={`w-full outline-none ${bg} border-b border-white`}
            ref={ref}
            type="text"
            value={todoText}
            onChange={onInputChange}
            onBlur={handleEditTodo}
          />
        ) : (
          <p>{todo.text}</p>
        )}
      </div>
    </>
  );
};
