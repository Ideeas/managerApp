import { takeLatest, call, put } from 'redux-saga/effects'

const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
const USER_AUTH_FAIILED = 'USER_AUTH_FAIILED'
const AUTH_USER = 'AUTH_USER'

const userReducer = (state, action) => {
  if (action.type === USER_AUTH_SUCCESS) {
    return { ...state, user: action.payload }
  }
}

export const authUser = () => {
  return {
    type: AUTH_USER,
    meta: {
      reducer: userReducer,
    },
  }
}

function* userSagas({ payload, meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const userData = {
      token: '123',
      nome: 'Vinicius',
      favorites: 0,
      projects: [],
    }
    yield put({ type: USER_AUTH_SUCCESS, payload: userData, meta })
  } catch ({ message }) {
    yield put({ type: USER_AUTH_FAIILED, error: message, meta })
  } finally {
    yield put({ type: 'STOP_LOADING' })
  }
}

const userCombineSagas = [takeLatest(AUTH_USER, userSagas)]

export default userCombineSagas
