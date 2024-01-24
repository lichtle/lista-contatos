import Contato from "../../components/Contato";
import { AgendaContainer } from "./styles";

const Agenda = () => (
  <AgendaContainer>
    <h1>Contatos</h1>
    <Contato />
    <Contato />
    <button>Adicionar um contato</button>
  </AgendaContainer>
);

export default Agenda;
