import "./Input.css";

function Input({ inputValue, handleInputChangeEvent }) {
  return (
    <input type="text" onChange={handleInputChangeEvent} value={inputValue} />
  );
}

export default Input;
