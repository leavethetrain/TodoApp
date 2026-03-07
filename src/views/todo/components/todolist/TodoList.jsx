import TodoHeader from "../todoheader/TodoHeader";
import TodoBody from "../todobody/TodoBody";
import { useState } from "react";
import "./TodoList.css";

function TodoList({}) {
  const [todos, setTodos] = useState([]);

  function handleCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);

    const updatedTodo = {
      ...todos[todoItemIndex],
      done: !todos[todoItemIndex].done,
    };

    const updateTodoItem = [...todos];
    updateTodoItem.splice(todoItemIndex, 1, updatedTodo);
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

  function Empty() {
    return <p>Noch keine Todos vorhanden</p>;
  }

  return (
    <div className="todo-list">
      <TodoHeader AddTodoItemToList={AddTodoItemToList} />
      <TodoBody
        todos={todos}
        handleCheckbox={handleCheckbox}
        deleteTodoItemFromList={deleteTodoItemFromList}
      />
      {todos.length === 0 && <Empty />}
    </div>
  );
}

export default TodoList;
