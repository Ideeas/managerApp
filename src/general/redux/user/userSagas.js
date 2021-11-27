import { takeLatest, put } from 'redux-saga/effects'
import { AUTH_USER, USER_AUTH_SUCCESS, USER_AUTH_FAIILED } from './'

function* userSagas({ payload, meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const userData = {
      token: '123',
      name: 'Vinicius',
      favorites: 0,
      projects: [
        { id: 1, title: 'Projeto ex', status: 'complete', date: '16/08/2001', owner: 'Junin' },
      ],
      favoritesProjects: [],
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
