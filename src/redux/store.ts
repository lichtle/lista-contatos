import { configureStore } from "@reduxjs/toolkit";

import contatoSlice from "./contact/slice";

const store = configureStore({
  reducer: {
    contatos: contatoSlice,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;