import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import { useState } from "react";
import "./TodoHeader.css";
import piep from "./piep.mp3";
function TodoHeader({ AddTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }
  function handleAddTodoItemEvent() {
    if (inputValue.trim() === "") {
      setShowWarning(true);

      const audio = new Audio(piep);
      audio.play();
      return;
    }

    AddTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }
  return (
    <div className="todo-header">
      {showWarning && (
        <div className="warning-overlay">
          <div className="warning-box">
            <p>Bitte Todo eingeben</p>
            <button onClick={() => setShowWarning(false)}>OK</button>
          </div>
        </div>
      )}
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
