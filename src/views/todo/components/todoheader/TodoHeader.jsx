import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import { useState } from "react";
function TodoHeader({ AddTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");
  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }
  function handleAddTodoItemEvent() {
    AddTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }
  return (
    <div>
      <Input
        handleInputChangeEvent={handleInputChangeEvent}
        inputValue={inputValue}
      />
      <Button
        buttonValue={"Add"}
        handleButtonClickEvent={handleAddTodoItemEvent}
      />
    </div>
  );
}

export default TodoHeader;
