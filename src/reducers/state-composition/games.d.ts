import { Action as ReduxAction } from 'redux'

export interface Game {
  id: string
  name: string
  publisher: Publisher
  backgroundImage: string
}

export interface Publisher {
  id: string
  name: string
}

export interface ActionPayload {
  gameList?: Array<Game>
  publisherList?: Array<Publisher>
}

export interface Action extends ReduxAction {
  payload?: ActionPayload
  error?: Error
}

export interface ReducerState {
  page: number
  maxPage: number
  gameList: Array<Game>
  publisherList: Array<Publisher>
}
