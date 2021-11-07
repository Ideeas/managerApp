import { call, put } from 'redux-saga/effects'

import * as Api from '../../../services/axios'

import { USER_CREATED_SUCCESS, USER_CREATED_FAILED } from '../../../views/SignUp/redux'

export default function* createUser(action) {
  try {
    const { payload } = action

    const content = {
      nome: payload.NAME,
      email: payload.EMAIL,
      username: payload.USERNAME,
      senha: payload.PASSWORD,
      admin: false,
      sobrenome: 'not root',
    }
    const response = yield call(Api.postCreateUser, content)
    yield put({ type: USER_CREATED_SUCCESS, payload: response, meta: action.meta })
  } catch ({ message }) {
    yield put({ type: USER_CREATED_FAILED, message })
  }
}
