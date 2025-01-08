import style from "./WelcomeMessage.module.css";
function WelcomeMessage({ todoitems }) {
  return (
    todoitems.length === 0 && <div className={style.message}>No tasks!</div>
  );
}

export default WelcomeMessage;
