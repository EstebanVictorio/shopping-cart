import { FC, ReactElement } from 'react'
import { connect } from 'react-redux'
import StoreState from 'reducers/state-composition'
import { Game } from 'reducers/state-composition/games'

interface SelectorPropTypes {
  games?: Array<Game>
}

type PropTypes = SelectorPropTypes

const Home: FC<PropTypes> = ({ games }): ReactElement =>
  (games && games.length && (
    <ul>
      {games.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )) || <span>{games ? 'No games' : 'Prop value unknown'}</span>

const mapStateToProps = ({
  games: { games },
}: StoreState): SelectorPropTypes => ({
  games,
})

export default connect(mapStateToProps)(Home)
