import { Children } from "react";
import "./Button.css";

function Button({ children, buttonValue, handleButtonClickEvent, className }) {
  return (
    <button onClick={handleButtonClickEvent} className={className}>
      {children || buttonValue}
    </button>
  );
}

export default Button;
