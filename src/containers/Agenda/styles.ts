import styled from "styled-components";

import cores from "../../styles/variables";

export const AgendaContainer = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  border-radius: 16px;
`;

export const BotaoAdicionar = styled.button`
  cursor: pointer;
  background-color: ${cores.addButton};
  width: 90%;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;