import { createSelector } from 'reselect'
import State from 'reducers/state-composition'
import { Game, ReducerState } from 'reducers/state-composition/games'

const gameReducer = (state: State): ReducerState => state.games

export const getGames = createSelector(
  [gameReducer],
  (games: ReducerState): Array<Game> => games.gameList,
)
