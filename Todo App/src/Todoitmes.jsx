import { MdDeleteForever } from "react-icons/md";
function Todoitems({ todoname, tododate, ondelete }) {
  return (
    <div className="row mt-3">
      <div className="col-5 p-0 text-white  fw-bold"> {todoname}</div>
      <div className="col-5 text-center text-white fw-bold"> {tododate} </div>
      <div className="col-2 p-0">
        <button
          className="btn btn-danger w-100"
          type="button"
          onClick={() => ondelete(todoname)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}
export default Todoitems;
