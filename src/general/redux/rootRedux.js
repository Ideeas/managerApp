import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/RootSagas'

export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

const rootReducer = (state = {}, action) => {
  if (action.type === START_LOADING) {
    return { ...state, loading: true }
  }

  if (action.type === STOP_LOADING) {
    return { ...state, loading: false }
  }

  if (action.meta && action.meta.reducer) {
    const { reducer } = action.meta
    return reducer(state, action)
  }
  return state
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
