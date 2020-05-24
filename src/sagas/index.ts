import gamesSagas from './games'
import { fork } from 'redux-saga/effects'

export default function* masterSaga() {
  yield fork(gamesSagas)
}
