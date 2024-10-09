import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      email: 'Ricardo@hotmail.com',
      prioridade: enums.Prioridade.IMPORTANTE,
      telefone: '48 9999-9999',
      nome: 'Ricardo'
    },
    {
      id: 2,
      email: 'Vanessa@hotmail.com',
      prioridade: enums.Prioridade.URGENTE,
      telefone: '48 9999-9999',
      nome: 'Vanessa'
    },
    {
      id: 3,
      email: 'Lua@outlook.com',
      prioridade: enums.Prioridade.NORMAL,
      telefone: '48 9999-9999',
      nome: 'Lua'
    },
    {
      id: 4,
      email: 'Mel@outlook.com',
      prioridade: enums.Prioridade.NORMAL,
      telefone: '48 9999-9999',
      nome: 'Mel'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Esta terefa ja existe!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefaSlice.actions

export default tarefaSlice.reducer
