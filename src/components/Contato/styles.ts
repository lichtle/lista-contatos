import styled from "styled-components";

import cores from "../../styles/variables";
import { Botao } from "../../styles";

export const Contatos = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
`;

export const Contato = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    font-weight: bold;
    width: 70px;
  }
`;

export const Campo = styled.input`
  width: 100%;
  padding: 6px;
  border: none;
`;

export const Acoes = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const BotaoEditar = styled(Botao)`
  background-color: ${cores.botaoEditar};
`;

export const BotaoExcluirCancelar = styled(Botao)`
  background-color: ${cores.botaoExcluir};
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${cores.botaoAdicionar};
`;
