import { createStore } from 'redux'

const rootReducer = (state = {}, action) => {
  if (action.meta && action.meta.reducer) {
    return reducer(state, action)
  }
  return state
}

export const store = createStore(rootReducer)
