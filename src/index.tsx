import store from 'store'
import Home from 'pages/home'
import { Provider } from 'react-redux'
import { FC, ReactElement } from 'react'
const container = document.querySelector('#root')

const App: FC = (): ReactElement => (
  <Provider store={store}>
    <Home />
  </Provider>
)

ReactDOM.render(<App />, container)
