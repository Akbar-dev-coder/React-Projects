import Todoitems from "./TodoItmes";
function Items({ todoitems, onDeleteitem }) {
  return (
    <>
      {todoitems.map((items) => (
        <Todoitems
          todoname={items.name}
          tododate={items.duedate}
          ondelete={onDeleteitem}
        ></Todoitems>
      ))}
    </>
  );
}

export default Items;
