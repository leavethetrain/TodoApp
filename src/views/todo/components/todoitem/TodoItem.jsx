import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";
import "./TodoItem.css";

function TodoItem({ todoItem, handleCheckbox, deleteTodoItemFromList }) {
  function handleDeleteTodoItem() {
    deleteTodoItemFromList(todoItem.id);
  }

  function handleCheckboxEvent(event) {
    const updateTodoItem = { ...todoItem };
    updateTodoItem.done = event.target.checked;
    handleCheckbox(updateTodoItem);
  }
  return (
    <div className="todo-item">
      <Checkbox
        id={todoItem.id}
        checked={todoItem.done}
        content={todoItem.content}
        handleCheckbox={() => handleCheckbox(todoItem)}
      />
      <Button handleButtonClickEvent={handleDeleteTodoItem} className="delete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <title xmlns="">delete</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.687 6.213L6.8 18.976a2.5 2.5 0 0 0 2.466 2.092h3.348m6.698-14.855L17.2 18.976a2.5 2.5 0 0 1-2.466 2.092h-3.348m-1.364-9.952v5.049m3.956-5.049v5.049M2.75 6.213h18.5m-6.473 0v-1.78a1.5 1.5 0 0 0-1.5-1.5h-2.554a1.5 1.5 0 0 0-1.5 1.5v1.78z"
          />
        </svg>
      </Button>
    </div>
  );
}

export default TodoItem;
