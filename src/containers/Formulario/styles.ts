import styled from "styled-components";

import cores from "../../styles/variables";

export const Campo = styled.input`
  width: 100%;
  padding: 16px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
`;

export const BotaoSalvar = styled.button`
  cursor: pointer;
  background-color: ${cores.botaoAdicionar};
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  margin-top: 16px;
  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  color: #000;
`;
