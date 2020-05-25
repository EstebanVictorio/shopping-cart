import { FETCH_GAMES, FETCH_GAMES_ENDED } from 'actions/services'

const fetchGames = () => ({
  type: FETCH_GAMES,
})

const fetchGamesEnded = () => ({
  type: FETCH_GAMES_ENDED,
})

export { fetchGames, fetchGamesEnded }
