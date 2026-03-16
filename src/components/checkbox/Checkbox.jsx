import "./Checkbox.css";

function Checkbox({ id, checked, content, handleCheckbox }) {
  return (
    <div className="checkbox-wrapper">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleCheckbox}
      ></input>
      <label htmlFor={id} className={checked ? "done" : "undone"}>
        <span className="custom-checkbox"></span>
        {content}
      </label>
    </div>
  );
}

export default Checkbox;
