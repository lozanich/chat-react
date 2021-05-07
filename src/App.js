import "./App.css";
import { Container } from "react-bootstrap";
import { Chat } from "./components/Chat";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      <Chat />
    </Container>
  );
}

export default App;
