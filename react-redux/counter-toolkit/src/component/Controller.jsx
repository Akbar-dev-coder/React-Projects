import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controller = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleincrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handledecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
  };
  const handleSubs = () => {
    dispatch({
      type: "SUBS",
      payload: {
        num: inputElement.current.value,
      },
    });
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };
  return (
    <>
      <div className="d-grid d-sm-flex justify-content-sm-center mb-1">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-1"
          onClick={handleincrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4 me-1"
          onClick={handledecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid  d-sm-flex justify-content-sm-center mb-2">
        <input
          className="me-1"
          type="text"
          placeholder="Enter number"
          ref={inputElement}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-1"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleSubs}
        >
          Substract
        </button>
      </div>
    </>
  );
};
export default Controller;
