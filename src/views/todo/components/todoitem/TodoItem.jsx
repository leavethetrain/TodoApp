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
        checked={todoItem.checked}
        content={todoItem.content}
        handleCheckbox={handleCheckboxEvent}
      />
      <Button
        buttonValue={"Delete"}
        handleButtonClickEvent={handleDeleteTodoItem}
      />
    </div>
  );
}

export default TodoItem;
