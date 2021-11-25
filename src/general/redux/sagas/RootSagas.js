import { all } from 'redux-saga/effects'
import userCombineSagas from '../user'
import signUpSagas from '../../../views/SignUp/redux/sagas/CreateUser'

function* watchAllSagas() {
  yield all([...signUpSagas, ...userCombineSagas])
}

export default watchAllSagas
