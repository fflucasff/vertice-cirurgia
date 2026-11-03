import { useState } from 'react'
import Formulario from './Formulario'
import {
  abertura,
  clinica,
  duvidas,
  filosofia,
  jornada,
  navegacao,
  procedimentos,
  rodape,
  seguranca,
} from './conteudo'

export default function App() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topo">
        <div className="topo-interno">
          <a className="marca" href="#topo">
            {clinica.nome}
            <span>{clinica.descritor}</span>
          </a>

          <nav className="nav-topo" aria-label="Seções do site">
            {navegacao.map((i) => (
              <a key={i.id} href={`#${i.id}`}>
                {i.rotulo}
              </a>
            ))}
          </nav>

          <a className="botao" href="#consulta">
            Agendar consulta
          </a>

          <button
            className="menu-botao"
            onClick={() => setMenu((a) => !a)}
            aria-expanded={menu}
            aria-controls="menu-movel"
          >
            {menu ? 'Fechar' : 'Menu'}
          </button>
        </div>

        <nav
          className={`menu-movel${menu ? ' aberto' : ''}`}
          id="menu-movel"
          aria-label="Seções do site"
        >
          {navegacao.map((i) => (
            <a key={i.id} href={`#${i.id}`} onClick={() => setMenu(false)}>
              {i.rotulo}
            </a>
          ))}
          <a href="#consulta" onClick={() => setMenu(false)}>
            Agendar consulta
          </a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="abertura" id="topo">
          <div className="abertura-interno">
            <h1>{abertura.titulo}</h1>
            <div className="abertura-base">
              <p>{abertura.texto}</p>
              <a className="botao botao-claro" href="#consulta">
                {abertura.chamada}
              </a>
            </div>
          </div>
        </section>

        <section className="secao" id="filosofia">
          <div className="cabeca">
            <h2>{filosofia.titulo}</h2>
            <p>{filosofia.texto}</p>
          </div>

          <div className="principios">
            {filosofia.principios.map((p) => (
              <article className="principio" key={p.titulo}>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao-osso" id="procedimentos">
          <div className="interno secao">
            <div className="cabeca">
              <h2>{procedimentos.titulo}</h2>
              <p>{procedimentos.intro}</p>
            </div>

            <div className="regioes">
              {procedimentos.grupos.map((g) => (
                <div key={g.regiao}>
                  <h3 className="regiao-titulo">{g.regiao}</h3>
                  <ul className="procedimentos-lista">
                    {g.itens.map((i) => (
                      <li key={i.nome}>
                        <span className="procedimento-nome">{i.nome}</span>
                        <span className="procedimento-nota">{i.nota}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="secao-preta" id="jornada">
          <div className="interno secao">
            <div className="cabeca">
              <h2>{jornada.titulo}</h2>
            </div>

            <ol className="jornada">
              {jornada.etapas.map((e, i) => (
                <li className="etapa" key={e.titulo}>
                  <span className="etapa-indice" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{e.titulo}</h3>
                    <p>{e.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="secao" id="seguranca">
          <div className="cabeca">
            <h2>{seguranca.titulo}</h2>
            <p>{seguranca.intro}</p>
          </div>

          <div className="seguranca">
            {seguranca.itens.map((s) => (
              <article className="item-seguranca" key={s.titulo}>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="secao-osso" id="duvidas">
          <div className="interno secao">
            <div className="cabeca">
              <h2>Dúvidas frequentes</h2>
            </div>
            <Duvidas />
          </div>
        </section>

        <section className="secao-preta" id="consulta">
          <div className="interno secao">
            <div className="form-grade">
              <div className="form-lateral">
                <div className="cabeca">
                  <h2>Agendar uma consulta</h2>
                </div>
                <p>
                  A consulta é presencial e serve para examinar, entender o que
                  motiva a procura e dizer o que é possível. Nenhuma data de
                  cirurgia é marcada nesse encontro.
                </p>
                <p>
                  Depois dela você recebe o planejamento por escrito e leva para
                  casa, com um intervalo deliberado antes de qualquer decisão.
                </p>
              </div>

              <Formulario />
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-interno">
          <p className="rodape-marca">{clinica.nome}</p>
          <p>{rodape.avisoMedico}</p>
          <p>{rodape.aviso}</p>
        </div>
      </footer>

      <div className="acao-fixa">
        <a className="botao" href="#consulta">
          Agendar consulta
        </a>
      </div>
    </>
  )
}

function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(null)

  return (
    <div className="duvidas">
      {duvidas.map((item, i) => {
        const expandida = aberta === i
        return (
          <div className="duvida" key={item.pergunta}>
            <h3>
              <button
                className="duvida-botao"
                aria-expanded={expandida}
                aria-controls={`duvida-${i}`}
                onClick={() => setAberta(expandida ? null : i)}
              >
                {item.pergunta}
                <span className="sinal" aria-hidden="true">
                  {expandida ? '−' : '+'}
                </span>
              </button>
            </h3>
            {expandida && (
              <div className="duvida-resposta" id={`duvida-${i}`}>
                {item.resposta}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
