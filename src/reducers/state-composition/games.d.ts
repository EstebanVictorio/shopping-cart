import { ServiceState } from 'services'
import { Action as ReduxAction } from 'redux'

export interface Game {
  id: string
  name: string
  publisher: Publisher
}

export interface Publisher {
  id: string
  name: string
}

export interface ActionPayload {
  games?: Array<Game>
  publishers?: Array<Publisher>
}

export interface Action extends ReduxAction {
  payload?: ActionPayload
  error?: Error
}

export interface ReducerState {
  page: number
  maxPage: number
  games: Array<Game>
  publishers: Array<Publisher>
  serviceState: ServiceState
}
