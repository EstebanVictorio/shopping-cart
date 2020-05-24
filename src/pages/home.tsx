import { connect } from 'react-redux'
import { getGames } from 'selectors/games'
import StoreState from 'reducers/state-composition'
import { FC, useCallback, ReactElement } from 'react'
import { fetchGames } from 'action-creators/services'
import { Action as ServiceAction } from 'reducers/state-composition/services'
import { Game } from 'reducers/state-composition/games'

interface SelectorPropTypes {
  gameList?: Array<Game>
  fetchGames?: () => ServiceAction
}

type PropTypes = SelectorPropTypes

const Home: FC<PropTypes> = ({ gameList, fetchGames }): ReactElement => {
  const handleClick = useCallback(() => fetchGames(), [fetchGames])
  return (
    <div>
      <input type='button' onClick={handleClick} value='Fetch games!' />
      {(gameList && gameList.length && (
        <ul>
          {gameList.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )) || <span>{gameList ? 'No games' : 'Prop value unknown'}</span>}
    </div>
  )
}

const mapStateToProps = (state: StoreState): SelectorPropTypes => ({
  gameList: getGames(state),
})

const mapDispatchToProps = {
  fetchGames,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
