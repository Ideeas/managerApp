import { all } from 'redux-saga/effects'

import signUpSagas from '../../../views/SignUp/redux/sagas/CreateUser'
import projectSagas from '../../../views/Create/redux/sagas/createProject'
import userCombineSagas from '../user/userSagas'

function* watchAllSagas() {
  yield all([...signUpSagas, ...userCombineSagas, ...projectSagas])
}

export default watchAllSagas
