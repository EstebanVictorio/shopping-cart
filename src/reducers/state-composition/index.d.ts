import { ReducerState as GameReducerState } from './games'
import { ReducerState as ServicesReducerState } from './services'

export default interface State {
  games: GameReducerState
  services: ServicesReducerState
}
