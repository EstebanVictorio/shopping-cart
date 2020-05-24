import reducers from 'reducers'
import masterSaga from 'sagas'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(masterSaga)

export default store
