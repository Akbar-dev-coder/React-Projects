import { useState, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function Addtodo({ newitem }) {
  /*const [todoName, settodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  function HandleNameChange(event) {
    settodoName(event.target.value);
  }
  function Handldatechange(event) {
    setDueDate(event.target.value);
  }*/
  const todoNemaElement = useRef();
  const dueDateElement = useRef();

  function AddButtonClick(event) {
    event.preventDefault();
    const todoName = todoNemaElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNemaElement.current.value = "";
    dueDateElement.current.value = "";
    newitem(todoName, dueDate);
    /* settodoName("");
    setDueDate("");*/
  }
  return (
    <form className="row" onSubmit={AddButtonClick}>
      <div className="col-5 p-0">
        <input
          ref={todoNemaElement}
          type="text"
          placeholder="Enter your todo"
          className="form-control"
          /*value={todoName}
          onChange={HandleNameChange}*/
        />
      </div>
      <div className="col-5">
        <input
          ref={dueDateElement}
          type="date"
          className="form-control"
          /* value={dueDate}
          onChange={Handldatechange}*/
        />
      </div>
      <div className="col-2 p-0">
        <button
          className="btn btn-primary w-100"
          type="submit"
          /*onClick={AddButtonClick}*/
        >
          <IoMdAddCircleOutline />
        </button>
      </div>
    </form>
  );
}

export default Addtodo;
