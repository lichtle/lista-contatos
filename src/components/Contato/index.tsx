import * as S from "./styles";
import { Botao } from "../../styles";

const Contato = () => (
  <>
    <S.Dados>
      {/* Dados */}
      <div>
        <span>Nome completo: xxx</span>
        <span>E-mail: xxx</span>
        <span>Telefone: xxx</span>
      </div>
      {/* Ações */}
      <div>
        <Botao>Editar</Botao>
        <Botao>Excluir</Botao>
      </div>
    </S.Dados>
  </>
);

export default Contato;
