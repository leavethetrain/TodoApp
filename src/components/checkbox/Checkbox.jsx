function Checkbox({ todoItem, handleCheckbox }) {
  function handleCheckboxEvent(event) {
    const updateTodoItem = { ...todoItem };
    updateTodoItem.done = event.target.checked;
    handleCheckbox(updateTodoItem);
  }
  return (
    <div>
      <input
        id={todoItem.id}
        type="checkbox"
        checked={todoItem.done}
        onChange={handleCheckboxEvent}
      ></input>
      <label for={todoItem.id}>{todoItem.content}</label>
    </div>
  );
}

export default Checkbox;
