import Tarefa from '../../componentes/Tarefa'
import { Cards, MainContainer, Titulo } from '../../styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtroTarefas = () => {
    let tarefaFiltradas = itens

    if (termo !== undefined) {
      tarefaFiltradas = tarefaFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefaFiltradas = tarefaFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }
      return tarefaFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} Contatos(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} Contatos(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const tarefas = filtroTarefas()
  const mensagem = exibeResultadoFiltrado(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <Cards>
        {tarefas.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </Cards>
    </MainContainer>
  )
}

export default ListaDeTarefas
