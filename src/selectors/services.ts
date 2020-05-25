import { ServiceState } from 'services'
import { createSelector } from 'reselect'
import State from 'reducers/state-composition'
import { ReducerState } from 'reducers/state-composition/services'

const servicesReducer = (state: State): ReducerState => state.services

export const getServices = createSelector(
  [servicesReducer],
  (services: ReducerState): ReducerState => services,
)

export const getGameService = createSelector(
  [servicesReducer],
  (services: ReducerState): ServiceState => services.games,
)
