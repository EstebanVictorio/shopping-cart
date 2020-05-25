import { connect } from 'react-redux'
import { ServiceState } from 'services'
import { getGames } from 'selectors/games'
import Loader from 'components/brand/loader'
import { getGameService } from 'selectors/services'
import StoreState from 'reducers/state-composition'
import { FC, useCallback, ReactElement, Fragment } from 'react'
import { fetchGames } from 'action-creators/services'
import { Game } from 'reducers/state-composition/games'
import { Action as ServiceAction } from 'reducers/state-composition/services'

interface SelectorPropTypes {
  gameList?: Array<Game>
  gameService?: ServiceState
  fetchGames?: () => ServiceAction
}

type PropTypes = SelectorPropTypes

const Home: FC<PropTypes> = ({
  gameList,
  gameService,
  fetchGames,
}): ReactElement => {
  const handleClick = useCallback(() => fetchGames(), [fetchGames])

  const { loading } = gameService

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <input type='button' onClick={handleClick} value='Fetch games!' />
          {(gameList && gameList.length && (
            <ul>
              {gameList.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )) || <span>{gameList ? 'No games' : 'Prop value unknown'}</span>}
        </Fragment>
      )}
    </div>
  )
}

const mapStateToProps = (state: StoreState): SelectorPropTypes => ({
  gameList: getGames(state),
  gameService: getGameService(state),
})

const mapDispatchToProps = {
  fetchGames,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
