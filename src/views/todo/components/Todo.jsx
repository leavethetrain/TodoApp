import TodoItem from "./todoitem/TodoItem";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    { id: Math.random(), content: "Wäsche waschen", done: false },
  ]);
  function handleCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updateTodoItem = [...todos];
    updateTodoItem.splice(todoItemIndex, 1, todoItem);
    setTodos(updateTodoItem);
  }
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleCheckbox={handleCheckbox} />
      ))}
    </>
  );
}

export default Todo;
