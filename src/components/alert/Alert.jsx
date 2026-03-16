import { createPortal } from "react-dom";
import "./Alert.css";

function Alert({ message, close }) {
  return createPortal(
    <div className="warning-overlay">
      <div className="warning-box">
        <p>{message}</p>
        <button className="todo-button" onClick={close}>
          OK
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default Alert;
