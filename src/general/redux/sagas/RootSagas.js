import { takeLatest, all } from 'redux-saga/effects'
import createUser from '../../../views/SignUp/redux/sagas/CreateUser'
import { CREATE_USER_REQUESTED } from '../../../views/SignUp/redux'

function* watchAllSagas() {
  yield all([takeLatest(CREATE_USER_REQUESTED, createUser)])
}

export default watchAllSagas
