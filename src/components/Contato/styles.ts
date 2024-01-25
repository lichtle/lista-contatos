import styled from "styled-components";

import cores from "../../styles/variables";

export const Dados = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 8px;
  margin-top: 16px;

  div span {
    display: block;
    margin-bottom: 12px;

    span {
      font-weight: bold;
    }
  }
`;

export const BotaoEditar = styled.button`
  cursor: pointer;
  background-color: ${cores.botaoEditar};
  margin: 0 4px;
  padding: 6px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid #000;
  color: #000;
`;

export const BotaoExcluir = styled.button`
  cursor: pointer;
  background-color: ${cores.botaoExcluir};
  margin: 0 4px;
  padding: 6px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 6px;
  border: 2px solid #000;
`;

