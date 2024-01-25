import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  ul {
    width: 100%;
  }

  html {
    background-color: beige;
  }
`;

export const Container = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
  margin: 32px 0;
`;

export default EstiloGlobal;
