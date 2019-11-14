import { all } from 'redux-saga/effects'
import { default as AuthSagas } from './auth.sagas'
import { default as UserSagas } from './user.sagas'
import { default as RecordSagas } from './record.sagas'

export default function* RootSaga() {
  yield all([...AuthSagas, ...UserSagas, ...RecordSagas])
}
