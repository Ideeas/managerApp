import { takeLatest, call, put } from 'redux-saga/effects'
import * as Storage from '../../../services/storage'
import * as ActionTypes from './'

import UserService from '../../../services/users'
import ProjectService from '../../../services/projects'

function* authUserSagas({ payload, meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const user = { username: payload.username, password: payload.password }
    const isUserExist = yield call(UserService.findOne, user)

    if (isUserExist.length <= 0) {
      throw new Error('user dont exist')
    }

    const projects = yield call(ProjectService.findAll, isUserExist[0].id)
    const favorites = yield call(ProjectService.findFavorites, isUserExist[0].id)
    yield call(Storage.setUserToken, String(isUserExist[0].id))

    yield put({
      type: ActionTypes.USER_AUTH_SUCCESS,
      payload: { ...isUserExist[0], projects, favorites },
      meta,
    })
  } catch (error) {
    yield put({ type: ActionTypes.USER_AUTH_FAIILED, payload: error, meta })
  } finally {
    yield put({ type: 'STOP_LOADING' })
  }
}

function* hasUserAuthenticate({ meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const userId = yield call(Storage.getUserToken)

    if (userId == null) return
    const user = yield call(UserService.finById, userId)

    if (user.length <= 0) return

    const projects = yield call(ProjectService.findAll, userId)
    const favorites = yield call(ProjectService.findFavorites, userId)
    yield put({
      type: ActionTypes.USER_AUTHENTICATED,
      payload: { ...user[0], projects, favorites },
      meta,
    })
  } catch (error) {
    throw new Error(error)
  } finally {
    yield put({ type: 'STOP_LOADING' })
  }
}

const userCombineSagas = [
  takeLatest(ActionTypes.AUTH_USER, authUserSagas),
  takeLatest(ActionTypes.HAS_USER_AUTH, hasUserAuthenticate),
]

export default userCombineSagas
