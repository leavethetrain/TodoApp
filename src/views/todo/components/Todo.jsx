import TodoList from "./todolist/TodoList";
import "../../Todo.css";

function Todo() {
  return (
    <div id="todo-view">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default Todo;
