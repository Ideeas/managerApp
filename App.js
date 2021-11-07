import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/general/redux/rootRedux'

import Routers from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  )
}
