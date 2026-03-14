import "./Alert.css";
import piep from "./piep.mp3";

function Alert({ message, close }) {
  const audio = new Audio(piep);
  audio.play();

  return (
    <div className="warning-overlay">
      <div className="warning-box">
        {" "}
        <p>{message}</p>{" "}
        <button classname="todo-button" onClick={close}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Alert;
