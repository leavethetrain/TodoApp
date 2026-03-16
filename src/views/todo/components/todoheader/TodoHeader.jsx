import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import { useState } from "react";
import "./TodoHeader.css";
import Alert from "../../../../components/alert/Alert";

function TodoHeader({ AddTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }
  function handleAddTodoItemEvent() {
    if (inputValue.trim() === "") {
      setShowAlert(true);

      return;
    }

    AddTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }
  return (
    <div>
      <div className="todo-header">
        <Input
          handleInputChangeEvent={handleInputChangeEvent}
          inputValue={inputValue}
        />
        <Button
          buttonValue={"Add"}
          handleButtonClickEvent={handleAddTodoItemEvent}
          className="add"
        />
      </div>
      {showAlert && (
        <Alert
          message="Bitte Todo eingeben"
          close={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}

export default TodoHeader;
