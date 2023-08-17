// Import from react
import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  // useState to set value
  const [value, setValue] = useState(task.task);

  // Function
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Edit
      </button>
    </form>
  );
};
