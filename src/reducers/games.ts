import produce, { Draft } from 'immer'
import { Action, ReducerState } from './state-composition/games'
import {
  FETCH_GAMES,
  FETCH_PUBLISHERS,
  FETCH_GAMES_ENDED,
  FETCH_PUBLISHERS_ENDED,
} from 'actions/games'

const initialState: ReducerState = {
  page: 1,
  games: [],
  maxPage: 1,
  publishers: [],
  serviceState: {
    error: null,
    loading: false,
    success: false,
    errorMsg: null,
  },
}

const games = (
  state: Draft<ReducerState> = initialState,
  action: Action,
): ReducerState => {
  switch (action.type) {
    case FETCH_GAMES:
    case FETCH_PUBLISHERS:
      state.serviceState.loading = true
      break
    case FETCH_PUBLISHERS_ENDED:
      state.serviceState.loading = false
      state.serviceState.success = !action.error
      state.serviceState.error = action.error !== undefined
      state.serviceState.errorMsg = action.error ? action.error.message : ''
      state.publishers = action.payload &&
        action.payload.publishers && [...action.payload.publishers]
      break
    case FETCH_GAMES_ENDED:
      state.serviceState.loading = false
      state.serviceState.success = !action.error
      state.serviceState.error = action.error !== undefined
      state.serviceState.errorMsg = action.error ? action.error.message : ''
      state.games = action.payload &&
        action.payload.games && [...action.payload.games]
      break
    default:
      return state
  }
}

export default produce(games)
