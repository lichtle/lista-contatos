import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";

import { AgendaContainer } from "../../containers/Agenda/styles";
import { BotaoAdicionarVoltar } from "../../containers/Agenda/styles";
import { BotaoSalvar } from "./styles";
import { Campo } from "./styles";
import { adicionar } from "../../redux/contact/slice";

const Formulario = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState(0);

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      adicionar({
        nome,
        email,
        telefone,
      })
    );

    navigate("/");
  };

  return (
    <AgendaContainer>
      <h1>Adicionar contato</h1>
      <BotaoAdicionarVoltar voltar to="/">
        Retornar
      </BotaoAdicionarVoltar>
      <form onSubmit={adicionarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
          required
        />
        <Campo
          value={telefone}
          onChange={(e) => setTelefone(Number(e.target.value))}
          type="number"
          placeholder="Número"
          required
        />
        <BotaoSalvar>Salvar contato</BotaoSalvar>
      </form>
    </AgendaContainer>
  );
};

export default Formulario;
