import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { remover, editar } from "../../redux/contact/slice";
import ContatoClass from "../../models/Contato";
import * as S from "./styles";

type Props = ContatoClass;

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
}: Props) => {
  const dispatch = useDispatch();

  const [estaEditando, setEstaEditando] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState(0);

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal);
    }

    if (emailOriginal.length > 0) {
      setEmail(emailOriginal);
    }

    if (telefoneOriginal) {
      setTelefone(telefoneOriginal);
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal]);

  function cancelarEdicao() {
    setNome(nomeOriginal);
    setEmail(emailOriginal);
    setTelefone(telefoneOriginal);
    setEstaEditando(false);
  }

  return (
    <S.Contatos>
      {estaEditando && <em>Editando contato</em>}
      <S.Contato>
        {estaEditando ? (
          <>
            <span>Nome:</span>
            <S.Campo
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </>
        ) : (
          <>
            <span>Nome:</span>
            <S.Campo type="text" value={nome} disabled={!estaEditando} />
          </>
        )}
      </S.Contato>
      <S.Contato>
        <span>E-mail:</span>
        <S.Campo
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!estaEditando}
        />
      </S.Contato>
      <S.Contato>
        <span>Telefone:</span>
        <S.Campo
          type="number"
          value={telefone}
          onChange={(e) => setTelefone(parseInt(e.target.value))}
          disabled={!estaEditando}
        />
      </S.Contato>
      <S.Acoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                  })
                );
                setEstaEditando(false);
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoExcluirCancelar onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoExcluirCancelar>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoExcluirCancelar onClick={() => dispatch(remover(telefone))}>
              Excluir
            </S.BotaoExcluirCancelar>
          </>
        )}
      </S.Acoes>
    </S.Contatos>
  );
};

export default Contato;
