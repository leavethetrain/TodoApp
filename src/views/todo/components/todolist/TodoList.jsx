import TodoHeader from "../todoheader/TodoHeader";
import TodoBody from "../todobody/TodoBody";
import { useState } from "react";
import "./TodoList.css"

function TodoList({}) {
  const [todos, setTodos] = useState([
    { id: Math.random(), content: "Wäsche waschen", done: false },
  ]);

  function handleCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updateTodoItem = [...todos];
    updateTodoItem.splice(todoItemIndex, 1, todoItem);
    setTodos(updateTodoItem);
  }

  function AddTodoItemToList(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  function deleteTodoItemFromList(todoId) {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }

  return (
    <div className="todo-list">
      <TodoHeader AddTodoItemToList={AddTodoItemToList} />
      <TodoBody
        todos={todos}
        handleCheckbox={handleCheckbox}
        deleteTodoItemFromList={deleteTodoItemFromList}
      />
    </div>
  );
}

export default TodoList;
