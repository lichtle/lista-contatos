import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Contato from "../../models/Contato";

type ContactsState = {
  contatos: Contato[];
};

const initialState: ContactsState = {
  contatos: [
    {
      nome: "Leticia Fernandes Negreiros",
      email: "example@mail.com",
      telefone: 12369874560,
    },
  ],
};

const contatoSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.contatos.find(
        (contato) => contato.telefone === action.payload.telefone
      );

      if (contatoJaExiste) {
        alert("Já existe um contato com este número na sua agenda!");
      } else {
        state.contatos.unshift(action.payload);
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.telefone !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.contatos.findIndex(
        (contato) => contato.telefone === action.payload.telefone
      );

      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload;
      }
    },
  },
});

export const { adicionar, remover, editar } = contatoSlice.actions;

export default contatoSlice.reducer;
