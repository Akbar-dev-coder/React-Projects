import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Container from "./component/Container";
import Displaycounter from "./component/DisplayCounter";
import PrivacyMessage from "./component/PrivacyMessage";
import Controller from "./component/Controller";
import { useSelector } from "react-redux";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <Container>
        <Header></Header>
        {privacy ? <PrivacyMessage /> : <Displaycounter />}
        <Controller />
      </Container>
    </>
  );
}

export default App;
