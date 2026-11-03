import { useRef, useState } from 'react'
import { formulario } from './conteudo'

/**
 * Solicitação de avaliação.
 * A clínica é fictícia: nada é enviado, e a confirmação diz isso.
 */

interface Campos {
  nome: string
  email: string
  telefone: string
  interesse: string
  observacoes: string
}

type Erros = Partial<Record<keyof Campos, string>>

const vazio: Campos = {
  nome: '',
  email: '',
  telefone: '',
  interesse: '',
  observacoes: '',
}

function validar(c: Campos): Erros {
  const e: Erros = {}
  if (c.nome.trim().length < 2) e.nome = 'Informe seu nome completo.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim()))
    e.email = 'Informe um e-mail válido, como nome@provedor.com.'
  const d = c.telefone.replace(/\D/g, '')
  if (d.length < 10 || d.length > 11)
    e.telefone = 'Informe o telefone com DDD, somando 10 ou 11 dígitos.'
  if (!c.interesse) e.interesse = 'Selecione a área que mais se aproxima.'
  return e
}

function mascaraTelefone(valor: string): string {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function Formulario() {
  const [campos, setCampos] = useState<Campos>(vazio)
  const [erros, setErros] = useState<Erros>({})
  const [enviado, setEnviado] = useState<Campos | null>(null)
  const ref = useRef<HTMLFormElement>(null)

  function alterar(campo: keyof Campos, valor: string) {
    setCampos((a) => ({ ...a, [campo]: valor }))
    if (erros[campo]) setErros((a) => ({ ...a, [campo]: undefined }))
  }

  function aoEnviar(evento: React.FormEvent) {
    evento.preventDefault()
    const encontrados = validar(campos)
    setErros(encontrados)
    const primeiro = Object.keys(encontrados)[0]
    if (primeiro) {
      ref.current?.querySelector<HTMLElement>(`[name="${primeiro}"]`)?.focus()
      return
    }
    setEnviado(campos)
  }

  if (enviado) {
    return (
      <div className="confirmacao" role="status">
        <h3>Solicitação registrada nesta demonstração</h3>
        <p>
          {enviado.nome.split(' ')[0]}, numa clínica real a equipe entraria em
          contato para marcar a consulta presencial e orientar sobre o que levar. Como
          este site é um estudo de caso,{' '}
          <strong>nenhum dado foi enviado ou armazenado</strong>. O que você
          digitou ficou apenas nesta aba e some ao recarregar a página.
        </p>
        <div className="confirmacao-dados">
          <span>Área de interesse: {enviado.interesse}</span>
          <span>Contato: {enviado.email}</span>
        </div>
        <button
          type="button"
          className="botao botao-claro"
          style={{ marginTop: 22 }}
          onClick={() => {
            setEnviado(null)
            setCampos(vazio)
          }}
        >
          Preencher novamente
        </button>
      </div>
    )
  }

  return (
    <form className="formulario" onSubmit={aoEnviar} noValidate ref={ref}>
      <div className="campo">
        <label htmlFor="nome">
          Nome completo <span className="obrigatorio">(obrigatório)</span>
        </label>
        <input
          id="nome"
          name="nome"
          className="entrada"
          value={campos.nome}
          onChange={(e) => alterar('nome', e.target.value)}
          aria-invalid={erros.nome ? 'true' : undefined}
          aria-describedby={erros.nome ? 'e-nome' : undefined}
          autoComplete="name"
        />
        {erros.nome && <p className="erro-campo" id="e-nome">{erros.nome}</p>}
      </div>

      <div className="dupla">
        <div className="campo">
          <label htmlFor="email">
            E-mail <span className="obrigatorio">(obrigatório)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="entrada"
            value={campos.email}
            onChange={(e) => alterar('email', e.target.value)}
            aria-invalid={erros.email ? 'true' : undefined}
            aria-describedby={erros.email ? 'e-email' : undefined}
            autoComplete="email"
          />
          {erros.email && <p className="erro-campo" id="e-email">{erros.email}</p>}
        </div>

        <div className="campo">
          <label htmlFor="telefone">
            Telefone com DDD <span className="obrigatorio">(obrigatório)</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            className="entrada"
            value={campos.telefone}
            onChange={(e) => alterar('telefone', mascaraTelefone(e.target.value))}
            aria-invalid={erros.telefone ? 'true' : undefined}
            aria-describedby={erros.telefone ? 'e-tel' : undefined}
            autoComplete="tel"
            placeholder="(11) 90000-0000"
          />
          {erros.telefone && <p className="erro-campo" id="e-tel">{erros.telefone}</p>}
        </div>
      </div>

      <div className="campo">
        <label htmlFor="interesse">
          Qual área te interessa <span className="obrigatorio">(obrigatório)</span>
        </label>
        <select
          id="interesse"
          name="interesse"
          className="entrada"
          value={campos.interesse}
          onChange={(e) => alterar('interesse', e.target.value)}
          aria-invalid={erros.interesse ? 'true' : undefined}
          aria-describedby={erros.interesse ? 'e-sit' : undefined}
        >
          <option value="">Selecione</option>
          {formulario.interesses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {erros.interesse && <p className="erro-campo" id="e-sit">{erros.interesse}</p>}
      </div>


      <div className="campo">
        <label htmlFor="observacoes">Se quiser, conte um pouco mais</label>
        <textarea
          id="observacoes"
          name="observacoes"
          className="entrada"
          value={campos.observacoes}
          onChange={(e) => alterar('observacoes', e.target.value)}
          placeholder="O que te incomoda, há quanto tempo e se já fez algum procedimento antes."
        />
      </div>

      <button type="submit" className="botao botao-claro">
        Enviar solicitação
      </button>

      <p className="form-nota">
        Demonstração. Nenhum dado é enviado, salvo ou compartilhado, e este formulário não marca consulta.
      </p>
    </form>
  )
}
