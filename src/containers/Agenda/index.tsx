import { useSelector } from "react-redux";

import { RootReducer } from "../../redux/store";
import { AgendaContainer, BotaoAdicionarVoltar } from "./styles";
import Contato from "../../components/Contato";

const Agenda = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos);

  return (
    <AgendaContainer>
      <h1>Contatos</h1>
      <BotaoAdicionarVoltar to="/adicionar">
        Adicionar um contato
      </BotaoAdicionarVoltar>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.telefone}>
            <Contato
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </AgendaContainer>
  );
};

export default Agenda;
