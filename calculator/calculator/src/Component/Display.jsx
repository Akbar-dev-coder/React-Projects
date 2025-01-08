import style from "../Component/Display.module.css";
function Display({ Displayvalue }) {
  return <input className={style.display} value={Displayvalue} readOnly />;
}

export default Display;
