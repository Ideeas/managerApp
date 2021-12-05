import { takeLatest, call, put } from 'redux-saga/effects'
import { User } from '../../../../models/User'
import UserService from '../../../../services/users'

import { USER_CREATED_SUCCESS, USER_CREATED_FAILED, CREATE_USER_REQUESTED } from '..'

function* createUser({ payload, meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const user = new User()
    const findUser = yield call(UserService.findAll)
    let alreadyExist = false
    for (const user of findUser._array) {
      if (user['email'] === payload.email) alreadyExist = true
    }

    if (alreadyExist) {
      yield put({ type: USER_CREATED_FAILED, error: 'Email already been registered', meta })
    } else {
      user.name = payload.name
      user.email = payload.email
      user.username = payload.username
      user.password = payload.password
      const id = yield call(UserService.create, user)

      if (id == null) yield put({ type: USER_CREATED_FAILED, error: 'Error try again later', meta })

      yield put({ type: USER_CREATED_SUCCESS, payolad: user, meta })
    }
  } catch ({ message }) {
    yield put({ type: USER_CREATED_FAILED, error: message, meta })
  } finally {
    yield put({ type: 'STOP_LOADING' })
  }
}

const signUpSagas = [takeLatest(CREATE_USER_REQUESTED, createUser)]

export default signUpSagas
