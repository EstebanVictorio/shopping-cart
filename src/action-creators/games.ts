import { Game, Action } from 'reducers/state-composition/games'
import { SET_GAMES } from 'actions/games'

const setGames = (games: Array<Game>): Action => ({
  type: SET_GAMES,
  payload: {
    gameList: games,
  },
})

export { setGames }
