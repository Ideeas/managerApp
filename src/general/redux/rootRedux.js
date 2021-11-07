import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/RootSagas'

const rootReducer = (state = {}, action) => {
  if (action.meta && action.meta.reducer) {
    const { reducer } = action.meta
    return reducer(state, action)
  }
  return state
}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
