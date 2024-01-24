import styled, { createGlobalStyle } from "styled-components";

import cores from "./variables";

type PropsDoBotao = {
  editar?: boolean;
};

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  html {
    background-color: beige;
  }
`;

export const Container = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const Botao = styled.button<PropsDoBotao>`
  cursor: pointer;
  background-color: ${(props) =>
    props.editar ? cores.editButton : cores.deleteButton};
  margin: 0 4px;
  padding: 6px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
`;

export default EstiloGlobal;
