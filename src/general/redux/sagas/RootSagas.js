import { all } from 'redux-saga/effects'

import signUpSagas from '../../../views/SignUp/redux/sagas/CreateUser'
import userCombineSagas from '../user/userSagas'

function* watchAllSagas() {
  yield all([...signUpSagas, ...userCombineSagas])
}

export default watchAllSagas
