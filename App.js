import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/general/redux/rootRedux'
import DatabaseInit from './src/database/init'
import Routers from './src/routes'

export default function App() {
  useEffect(() => {
    new DatabaseInit()._InitDb()
  }, [])
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  )
}
