import { useDispatch } from "react-redux";

import * as S from "./styles";
import ContatoClass from "../../models/Contato";
import { remover } from "../../redux/contact/slice";
import { BotaoEditar, BotaoExcluir } from "./styles";

type Props = ContatoClass; // Renomeamos a classe 'Tarefa' para não dar conflito com o nome da classe criada abaixo, que já é 'Tarefa'

const Contato = ({ nome, email, telefone }: Props) => {
  const dispatch = useDispatch();

  return (
    <S.Dados>
      <div>
        <span>
          <span>Nome completo: </span>
          {nome}
        </span>
        <span>
          <span>E-mail: </span>
          {email}
        </span>
        <span>
          <span>Telefone: </span>
          {telefone}
        </span>
      </div>
      <div>
        <BotaoEditar>Editar</BotaoEditar>
        <BotaoExcluir onClick={() => dispatch(remover(telefone))}>
          Excluir
        </BotaoExcluir>
      </div>
    </S.Dados>
  );
};

export default Contato;
