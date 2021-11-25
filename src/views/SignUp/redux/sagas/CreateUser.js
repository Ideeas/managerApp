import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../../../services/axios'

import { USER_CREATED_SUCCESS, USER_CREATED_FAILED, CREATE_USER_REQUESTED } from '..'

function* createUser({ payload, meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const { data } = yield call(Api.createUser, payload)
    yield put({ type: USER_CREATED_SUCCESS, payolad: data, meta })
  } catch ({ message }) {
    yield put({ type: USER_CREATED_FAILED, error: message, meta })
  } finally {
    yield put({ type: 'STOP_LOADING' })
  }
}

const signUpSagas = [takeLatest(CREATE_USER_REQUESTED, createUser)]

export default signUpSagas
