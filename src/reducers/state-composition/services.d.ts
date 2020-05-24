import { ServiceState } from 'services'
import { Action as ReduxAction } from 'redux'

export interface Action extends ReduxAction {
  error?: Error
}

export interface ReducerState {
  games: ServiceState
  publishers: ServiceState
}
