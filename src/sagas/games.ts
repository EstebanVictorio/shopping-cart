import { getGames } from 'services/api'
import { FETCH_GAMES } from 'actions/services'
import { setGames } from 'action-creators/games'
import { put, takeLatest } from 'redux-saga/effects'

export function* fetchGames() {
  const response = yield getGames()
  const data = yield response.json()
  yield put(setGames(data.results))
}

export default function* rootSaga() {
  yield takeLatest(FETCH_GAMES, fetchGames)
}
