import style from "../Component/ButtonContainer.module.css";
function ButtonContainer({ onBtnClick }) {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.ButtonContainer}>
      {ButtonNames.map((items, Buttonkey) => (
        <button
          key={Buttonkey}
          className={style.Btn}
          onClick={() => onBtnClick(items)}
        >
          {items}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;
