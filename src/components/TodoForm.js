// Import from react
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  // useState to set value
  const [value, setValue] = useState("");

  // Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Task name.."
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
