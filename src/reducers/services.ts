import produce, { Draft } from 'immer'
import { Action, ReducerState } from './state-composition/services'
import {
  FETCH_GAMES,
  FETCH_PUBLISHERS,
  FETCH_GAMES_ENDED,
  FETCH_PUBLISHERS_ENDED,
} from 'actions/services'

const initialState: ReducerState = {
  games: {
    error: null,
    loading: false,
    success: false,
    errorMsg: null,
  },
  publishers: {
    error: null,
    loading: false,
    success: false,
    errorMsg: null,
  },
}

const services = (
  state: Draft<ReducerState> = initialState,
  { type, error }: Action,
): ReducerState => {
  switch (type) {
    case FETCH_GAMES:
      state.games.loading = true
      break
    case FETCH_PUBLISHERS:
      state.publishers.loading = true
      break
    case FETCH_GAMES_ENDED:
      state.games.loading = false
      state.games.success = !error
      state.games.error = error !== undefined
      state.games.errorMsg = error ? error.message : ''
      break
    case FETCH_PUBLISHERS_ENDED:
      state.publishers.loading = false
      state.publishers.success = !error
      state.publishers.error = error !== undefined
      state.publishers.errorMsg = error ? error.message : ''
      break
    default:
      return state
  }
}

export default produce(services)
