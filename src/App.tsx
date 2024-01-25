import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EstiloGlobal, { Container } from "./styles";
import Home from "./pages/home";
import Adicionar from "./pages/adicionar";
import store from "./redux/store";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adicionar",
    element: <Adicionar />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;
