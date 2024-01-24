import * as S from "./styles";
import Acoes from "../Acoes";

const Contato = () => (
  <S.Dados>
    {/* Dados */}
    <div>
      <span>
        <span>Nome completo:</span> Leticia Fernandes Negreiros
      </span>
      <span>
        <span>E-mail:</span> example@mail.com
      </span>
      <span>
        <span>Telefone:</span> 00000000000
      </span>
    </div>
    <Acoes />
  </S.Dados>
);

export default Contato;
