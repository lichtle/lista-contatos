import EstiloGlobal, { Container } from "./styles";
import Agenda from "./containers/Agenda";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Agenda />
      </Container>
    </>
  );
}

export default App;
