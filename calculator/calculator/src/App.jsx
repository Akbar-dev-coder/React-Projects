import "./App.css";
import Display from "./Component/Display";
import ButtonContainer from "./Component/ButtonContainer";
import { useState } from "react";
function App() {
  const [calVal, setcalVal] = useState("");

  function onButtonClick(buttonTex) {
    if (buttonTex === "C") {
      setcalVal("");
    } else if (buttonTex === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonTex;
      setcalVal(newDisplayValue);
    }
  }
  return (
    <>
      <div id="main">
        <Display Displayvalue={calVal}></Display>
        <ButtonContainer onBtnClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
