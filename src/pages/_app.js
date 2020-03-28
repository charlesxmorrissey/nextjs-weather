import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import configureStore from 'src/store'
import rootSaga from 'src/sagas'

import 'src/styles/base.css'

const store = configureStore()

store.runSaga(rootSaga)

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
