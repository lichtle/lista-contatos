import { Link } from "react-router-dom";
import styled from "styled-components";

import cores from "../../styles/variables";

type PropsDoBotao = {
  voltar?: boolean;
};

export const AgendaContainer = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px;
  border-radius: 16px;
  width: 400px;
`;

export const BotaoAdicionarVoltar = styled(Link)<PropsDoBotao>`
  cursor: pointer;
  background-color: ${(props) =>
    props.voltar ? cores.botaoRetornar : cores.botaoAdicionar};
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  color: #000;
`;
