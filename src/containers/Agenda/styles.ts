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
  gap: 30px;
  padding: 40px;
  border-radius: 16px;
  width: 550px;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  color: #000;
`;
