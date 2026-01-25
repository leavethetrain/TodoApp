import TodoItem from "../todoitem/TodoItem";

function TodoBody({ todos, handleCheckbox, deleteTodoItemFromList }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          handleCheckbox={handleCheckbox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
    </div>
  );
}

export default TodoBody;
