import { AgendaContainer, BotaoAdicionar } from "./styles";
import Acoes from "../../components/Acoes";
import Contato from "../../components/Contato";

const Agenda = () => (
  <AgendaContainer>
    <h1>Contatos</h1>
    <BotaoAdicionar>Adicionar um contato</BotaoAdicionar>
    <Contato />
    <Contato />
    <Contato />
  </AgendaContainer>
);

export default Agenda;
