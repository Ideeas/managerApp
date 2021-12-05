import { takeLatest, call, put } from 'redux-saga/effects'
import UserService from '../../../services/users'
import { AUTH_USER, USER_AUTH_SUCCESS, USER_AUTH_FAIILED } from './'

function* userSagas({ payload, meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const user = { username: payload.username, password: payload.password }
    const isUserExist = yield call(UserService.findOne, user)
    yield put({ type: USER_AUTH_SUCCESS, payload: isUserExist, meta })
  } catch (error) {
    yield put({ type: USER_AUTH_FAIILED, payload: error, meta })
  } finally {
    yield put({ type: 'STOP_LOADING' })
  }
}

const userCombineSagas = [takeLatest(AUTH_USER, userSagas)]

export default userCombineSagas
