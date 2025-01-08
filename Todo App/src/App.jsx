import "./Mystyle.css";
import Addtodo from "./Addtodo";
import Items from "./Items";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
function App() {
  const [todoitems, settodoItem] = useState([]);

  function HandleItem(itemname, itemdate) {
    settodoItem((currentValue) => [
      ...currentValue,
      { name: itemname, duedate: itemdate },
    ]);
  }

  function Delete(todoitemname) {
    const deletetodoitems = todoitems.filter(
      (Items) => Items.name != todoitemname
    );
    settodoItem(deletetodoitems);
  }
  return (
    <main
      style={{
        background: " conic-gradient(red, yellow, green, blue, red)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-white"> Todo App </h1>
      <div className="container">
        <Addtodo newitem={HandleItem}></Addtodo>
        <WelcomeMessage todoitems={todoitems} />
        <Items todoitems={todoitems} onDeleteitem={Delete}></Items>
      </div>
    </main>
  );
}

export default App;
