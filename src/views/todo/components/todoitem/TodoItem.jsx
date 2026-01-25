import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";

function TodoItem({ todoItem, handleCheckbox }) {
  return (
    <div>
      <Checkbox todoItem={todoItem} handleCheckbox={handleCheckbox} />
      <Button />
    </div>
  );
}

export default TodoItem;
