import produce, { Draft } from 'immer'
import { SET_GAMES, SET_PUBLISHERS } from 'actions/games'
import { Action, ReducerState } from './state-composition/games'

const initialState: ReducerState = {
  page: 1,
  gameList: [],
  maxPage: 1,
  publisherList: [],
}

const games = (
  state: Draft<ReducerState> = initialState,
  { type, payload }: Action,
): ReducerState => {
  switch (type) {
    case SET_GAMES:
      state.gameList = payload ? payload.gameList : state.gameList
      break
    case SET_PUBLISHERS:
      state.publisherList = payload
        ? payload.publisherList
        : state.publisherList
      break
    default:
      return state
  }
}

export default produce(games)
