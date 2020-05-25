import { getGames } from 'services/api'
import { FETCH_GAMES } from 'actions/services'
import { setGames } from 'action-creators/games'
import { put, takeLatest } from 'redux-saga/effects'
import { fetchGamesEnded } from 'action-creators/services'

export function* fetchGames() {
  const response = yield getGames()
  yield put(setGames(response.results))
  yield put(fetchGamesEnded())
}

export default function* rootSaga() {
  yield takeLatest(FETCH_GAMES, fetchGames)
}
