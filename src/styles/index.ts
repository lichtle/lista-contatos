import styled, { createGlobalStyle } from "styled-components";

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
  margin-top: 72px;
`;

export const Botao = styled.button`
  background-color: lightgreen;
  font-weight: bold;
  padding: 8px;
  margin: 0 8px;
`;

export default EstiloGlobal;
